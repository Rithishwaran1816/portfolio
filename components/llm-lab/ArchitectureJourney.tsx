"use client";

import React, { useState } from "react";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, FileCode } from "lucide-react";

interface Stage {
  id: string;
  step: string;
  name: string;
  subtitle: string;
  concept: string;
  math: string;
  codeSnippet: string;
  keyTakeaway: string;
}

const STAGES: Stage[] = [
  {
    id: "input", step: "01", name: "RAW INPUT STRING", subtitle: "User Prompt Ingestion",
    concept: "Capturing raw UTF-8 textual prompts from user interaction. The model cannot compute directly on characters, so it begins by standardizing whitespace and character encodings.",
    math: "x \\in \\mathcal{V}^* \\quad \\text{(Arbitrary sequence of string characters)}",
    codeSnippet: `raw_prompt = "Explain quantum computing in one sentence."\nclean_text = raw_prompt.strip()`,
    keyTakeaway: "Text enters as unstructured string sequences.",
  },
  {
    id: "tokenization", step: "02", name: "TOKENIZATION", subtitle: "BPE / Vocabulary Partitioning",
    concept: "Deconstructing continuous text into discrete integer token IDs using Byte-Pair Encoding (BPE) or character vocabularies. Subword tokens balance vocabulary size with sequence length efficiency.",
    math: "T = [t_1, t_2, \\dots, t_N] \\in \\mathbb{Z}^{N}, \\quad t_i < V_{size}",
    codeSnippet: `def encode(text, vocab_map):\n    return [vocab_map[ch] for ch in text]\n\ntokens = encode("Explain quantum", char_to_id)\n# Output: [18, 45, 32, 11, 29, 60]`,
    keyTakeaway: "Transforms arbitrary words into fixed integers mapped to a vocabulary.",
  },
  {
    id: "embeddings", step: "03", name: "EMBEDDINGS & POSITIONAL ENCODING", subtitle: "High-Dimensional Vector Mapping",
    concept: "Each token integer is looked up in an embedding weight matrix. Since transformers process all tokens simultaneously without recurrence, sinusoidal or learned positional encodings are added to preserve sequential order.",
    math: "X_0 = \\text{Embedding}(T) + PE(\\text{pos}), \\quad X_0 \\in \\mathbb{R}^{N \\times d_{model}}",
    codeSnippet: `class InputEmbeddings(nn.Module):\n    def __init__(self, vocab_size, d_model, max_len=512):\n        super().__init__()\n        self.tok_embed = nn.Embedding(vocab_size, d_model)\n        self.pos_embed = nn.Embedding(max_len, d_model)\n\n    def forward(self, x):\n        seq_len = x.size(1)\n        pos = torch.arange(0, seq_len, device=x.device)\n        return self.tok_embed(x) + self.pos_embed(pos)`,
    keyTakeaway: "Converts discrete IDs into continuous vector space with sequence coordinates.",
  },
  {
    id: "transformer-arch", step: "04", name: "TRANSFORMER ARCHITECTURE", subtitle: "Stacked Decoder Blocks",
    concept: "A stack of L identical transformer decoder layers. Each layer contains two primary sub-layers: a Multi-Head Masked Self-Attention mechanism and a position-wise Feed-Forward Neural Network, surrounded by residual connections and layer normalization.",
    math: "X_{l} = \\text{TransformerBlock}_l(X_{l-1}), \\quad \\forall l \\in \\{1, \\dots, L\\}",
    codeSnippet: `class TransformerBlock(nn.Module):\n    def __init__(self, d_model, n_heads, d_ff, dropout=0.1):\n        super().__init__()\n        self.attn = MultiHeadAttention(d_model, n_heads)\n        self.ln1 = nn.LayerNorm(d_model)\n        self.ffn = FeedForward(d_model, d_ff)\n        self.ln2 = nn.LayerNorm(d_model)\n\n    def forward(self, x):\n        x = x + self.attn(self.ln1(x))  # Pre-LN Residual\n        x = x + self.ffn(self.ln2(x))\n        return x`,
    keyTakeaway: "Modular blocks stacked to learn progressively deeper contextual representations.",
  },
  {
    id: "self-attention", step: "05", name: "MULTI-HEAD SELF-ATTENTION", subtitle: "Query, Key, Value Projections",
    concept: "The mathematical core of the LLM. Linearly projects inputs into Queries (Q), Keys (K), and Values (V). Computes pairwise dot-product compatibility scores, masks future tokens (causal masking), scales by √d_k, applies softmax, and aggregates values.",
    math: "\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{QK^T}{\\sqrt{d_k}} + M \\right) V",
    codeSnippet: `def scaled_dot_product_attention(q, k, v, mask=None):\n    d_k = q.size(-1)\n    scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(d_k)\n    if mask is not None:\n        scores = scores.masked_fill(mask == 0, -1e9)\n    attn_weights = torch.softmax(scores, dim=-1)\n    return torch.matmul(attn_weights, v), attn_weights`,
    keyTakeaway: "Allows every token to dynamically focus on relevant context across the entire prompt.",
  },
  {
    id: "add-norm", step: "06", name: "ADD & PRE-LAYER NORMALIZATION", subtitle: "Residual Streams & Gradient Highways",
    concept: "Residual connections (x + Sublayer(x)) provide an unobstructed gradient highway that prevents vanishing gradients during deep backpropagation. Layer Normalization standardizes activations across the channel dimension.",
    math: "y = x + \\text{Dropout}(\\text{Sublayer}(\\text{LayerNorm}(x)))",
    codeSnippet: `# Pre-LayerNorm Residual Connection\nresidual = x\nx = self.ln(x)\nx = self.sublayer(x)\nx = residual + self.dropout(x)`,
    keyTakeaway: "Enables stable training across tens of stacked transformer layers.",
  },
  {
    id: "ffn", step: "07", name: "FEED-FORWARD NEURAL NETWORK (FFN)", subtitle: "Non-Linear Feature Transformation",
    concept: "A two-layer Multi-Layer Perceptron (MLP) applied independently to each position. Typically expands the dimension from d_model to 4 × d_model with a non-linear activation (GELU / SwiGLU) before projecting back down.",
    math: "\\text{FFN}(x) = \\text{GELU}(x W_1 + b_1) W_2 + b_2",
    codeSnippet: `class FeedForward(nn.Module):\n    def __init__(self, d_model, d_ff):\n        super().__init__()\n        self.fc1 = nn.Linear(d_model, d_ff)\n        self.fc2 = nn.Linear(d_ff, d_model)\n        self.act = nn.GELU()\n\n    def forward(self, x):\n        return self.fc2(self.act(self.fc1(x)))`,
    keyTakeaway: "Stores factual knowledge and computes non-linear feature combinations.",
  },
  {
    id: "layer-norm", step: "08", name: "FINAL LAYER NORMALIZATION", subtitle: "Output Standardization",
    concept: "After passing through all L stacked transformer blocks, the final hidden state tensor is passed through a concluding LayerNorm layer to normalize feature variance before the projection head.",
    math: "\\hat{h} = \\frac{h - \\mu}{\\sqrt{\\sigma^2 + \\epsilon}} \\odot \\gamma + \\beta",
    codeSnippet: `final_hidden_states = self.ln_final(stacked_block_output)`,
    keyTakeaway: "Guarantees numerical stability for the classification head.",
  },
  {
    id: "dense-projection", step: "09", name: "DENSE PROJECTION & LOGITS", subtitle: "Un-embedding into Vocabulary Logits",
    concept: "The final normalized hidden states are multiplied by the un-embedding matrix (often weight-tied to the input embedding matrix) to yield raw, unnormalized score vectors (logits) for every token in the vocabulary.",
    math: "\\text{logits} = \\hat{h} W_u \\in \\mathbb{R}^{N \\times V}",
    codeSnippet: `logits = self.lm_head(final_hidden_states) # Shape: [Batch, Seq_Len, Vocab_Size]`,
    keyTakeaway: "Maps internal latent representations back to vocabulary score dimensions.",
  },
  {
    id: "output", step: "10", name: "SOFTMAX & AUTOREGRESSIVE GENERATION", subtitle: "Probability Distribution & Sampling",
    concept: "Applies the Softmax function over logits with a temperature parameter T. Samples the next token from the probability distribution using Top-k or Top-p (nucleus) sampling, appends it to the sequence, and repeats autoregressively.",
    math: "P(w_{t+1} | w_{\\le t}) = \\frac{\\exp(\\text{logit}_i / T)}{\\sum_j \\exp(\\text{logit}_j / T)}",
    codeSnippet: `probs = torch.softmax(logits[:, -1, :] / temperature, dim=-1)\nnext_token = torch.multinomial(probs, num_samples=1)\n# Autoregressive step: append next_token and loop`,
    keyTakeaway: "Produces fluent generated language one token at a time.",
  },
];

export const ArchitectureJourney: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(4);
  const current = STAGES[activeIdx];

  return (
    <div className="flex flex-col gap-8">
      {/* Step Selector Horizontal Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {STAGES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              sound.playHover();
              setActiveIdx(idx);
            }}
            className={`px-3 py-2 rounded-xl font-mono text-xs whitespace-nowrap transition-all border shrink-0 flex items-center gap-2 cursor-pointer ${
              activeIdx === idx
                ? "bg-violet-600 border-violet-400 text-white shadow-lg font-bold"
                : "bg-slate-100 dark:bg-[#121212]/80 border-slate-200 dark:border-white/10 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30"
            }`}
          >
            <span className="text-[10px] opacity-70 font-mono">{s.step}</span>
            <span>{s.name}</span>
          </button>
        ))}
      </div>

      {/* Active Stage Detailed Card */}
      <GlowingCard
        glowColor="rgba(139, 92, 246, 0.25)"
        className="p-6 sm:p-10 border border-violet-300 dark:border-violet-500/30 bg-white dark:bg-[#0E0D16]/95 shadow-xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Stage Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                  STAGE {current.step} OF 10 // {current.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {current.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={activeIdx === 0}
                  onClick={() => {
                    sound.playClick();
                    setActiveIdx((prev) => Math.max(0, prev - 1));
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  ← PREV STAGE
                </button>
                <button
                  disabled={activeIdx === STAGES.length - 1}
                  onClick={() => {
                    sound.playClick();
                    setActiveIdx((prev) => Math.min(STAGES.length - 1, prev + 1));
                  }}
                  className="px-3 py-1.5 rounded-lg bg-violet-600 border border-violet-400 text-xs font-mono text-white hover:bg-violet-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  NEXT STAGE →
                </button>
              </div>
            </div>

            {/* Concept & Mathematical Formulation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-wider block font-semibold mb-1">
                    MECHANICAL EXPLANATION:
                  </span>
                  <p className="text-slate-700 dark:text-neutral-200 text-sm font-light leading-relaxed">
                    {current.concept}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-200 dark:border-white/10 space-y-1.5">
                  <span className="text-[10px] font-mono text-violet-600 dark:text-violet-400 uppercase tracking-wider block font-semibold">
                    FORMAL MATHEMATICAL FORMULATION:
                  </span>
                  <div className="font-mono text-xs text-cyan-700 dark:text-cyan-300 overflow-x-auto py-1">
                    {current.math}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-500/20 text-xs font-mono text-violet-800 dark:text-violet-200 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
                  <span>{current.keyTakeaway}</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="lg:col-span-6 flex flex-col rounded-xl bg-slate-900 dark:bg-[#08080C] border border-slate-700 dark:border-white/10 overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-800 dark:bg-white/[0.04] border-b border-slate-700 dark:border-white/10 text-slate-400 dark:text-neutral-400 text-[11px]">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                    <span>transformer_scratch.py</span>
                  </div>
                  <span className="text-slate-500 dark:text-neutral-500">PYTORCH</span>
                </div>
                <div className="p-4 overflow-x-auto text-slate-300 dark:text-neutral-300 leading-relaxed">
                  <pre>{current.codeSnippet}</pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </GlowingCard>
    </div>
  );
};
