import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  Sparkles,
  Bot,
  Brain,
  Database,
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
  Terminal,
  FileCheck
} from 'lucide-react';

const PRESETS = [
  {
    id: 'rag-health',
    title: 'Healthcare Clinical Document RAG',
    system: 'LangChain + Pinecone Vector Index',
    query: 'What are the dosage contraindications for hypertensive patients in the Phase-III report?',
    workflow: [
      {
        node: 'Document Chunk Ingestion',
        icon: <Database className="size-4 text-emerald-400" />,
        status: 'Vector match found in Pinecone namespace "clinical-v3"',
        details: 'Top-3 chunk vectors retrieved with cosine similarity > 0.91.'
      },
      {
        node: 'LangChain Context Window Mapping',
        icon: <Layers className="size-4 text-cyan-400" />,
        status: 'Context window constructed with source citations',
        details: 'Injected 3 chunks (768 tokens) into system prompt template.'
      },
      {
        node: 'Grounded Answer Generation',
        icon: <Sparkles className="size-4 text-violet-400" />,
        status: 'Synthesis complete with 2 verifiable inline citations',
        details: 'Confidence: 98.2% • Hallucination index: 0.02 • Citation mapping verified.'
      }
    ],
    output: 'Based on Phase-III Clinical Report [Doc_Page_14], patients with stage-2 hypertension should not exceed 25mg daily during the initial titration phase. A secondary titration protocol [Doc_Page_18] mandates serum monitoring after 14 days.',
    citations: ['Phase-III_Report.pdf (p.14)', 'Titration_Protocol.pdf (p.18)'],
    metrics: { latency: '142ms', chunks: '3 matched', similarity: '0.92', tokens: '384' }
  },
  {
    id: 'langgraph-cycle',
    title: 'LangGraph Cyclic Multi-Agent Assistant',
    system: 'LangGraph Cyclic State Graph (Planner → Retriever → Executor)',
    query: 'Synthesize renewable energy storage market trends with multi-hop citations.',
    workflow: [
      {
        node: 'Planner Agent (Task Decomposition)',
        icon: <Brain className="size-4 text-amber-400" />,
        status: 'Decomposed into 2 sub-queries: [Battery Storage CapEx] & [Grid Interconnection]',
        details: 'Conditional routing edge activated based on query complexity.'
      },
      {
        node: 'Retriever Agent (FAISS Local Search)',
        icon: <Database className="size-4 text-blue-400" />,
        status: 'FAISS index queried across 45,000 vector embeddings',
        details: 'Retrieved 4 relevant academic papers and industry filings.'
      },
      {
        node: 'Executor Agent (State Checkpointing & Synthesis)',
        icon: <Bot className="size-4 text-emerald-400" />,
        status: 'State graph checkpoint saved; final report synthesized',
        details: 'Passed through human-in-the-loop checkpoint safely.'
      }
    ],
    output: 'LangGraph cyclic evaluation identified that grid-scale BESS (Battery Energy Storage Systems) lithium iron phosphate costs dropped by 18% in 2025, while long-duration flow batteries saw a 34% increase in deployment pipeline volume across EU & APAC markets.',
    citations: ['BESS_Market_Analysis_2026.pdf', 'Grid_Storage_Report.docx'],
    metrics: { latency: '198ms', chunks: '4 matched', similarity: '0.94', tokens: '462' }
  },
  {
    id: 'mock-interview',
    title: 'AI Mock Interview Voice & Code Evaluator',
    system: 'OpenAI GPT-4 + Web Speech Real-Time Transcription',
    query: 'Evaluate candidate response for "Optimize Two Sum from O(N^2) to O(N) using HashMaps".',
    workflow: [
      {
        node: 'Audio Transcription & Tokenization',
        icon: <Activity className="size-4 text-pink-400" />,
        status: 'Speech-to-text streamed via Web Speech API',
        details: 'Extracted candidate rationale, time complexity mention, and edge cases.'
      },
      {
        node: 'OpenAI Evaluation Pipeline',
        icon: <Sparkles className="size-4 text-indigo-400" />,
        status: 'Scored against Rubric: Algorithmic Correctness, Code Efficiency, Communication',
        details: 'Generated targeted constructive feedback for edge cases (duplicate entries).'
      },
      {
        node: 'Session Persisted to MongoDB',
        icon: <Database className="size-4 text-emerald-400" />,
        status: 'Saved to MongoDB user performance collection',
        details: 'User score: 92/100 • Status: Strong Hire recommendation.'
      }
    ],
    output: 'Score: 92/100 (Strong Hire). Candidate correctly recognized the trade-off of using auxiliary space O(N) to achieve linear time complexity O(N). Recommended follow-up: Discuss memory constraints for billion-element streams.',
    citations: ['Interview_Rubric_v2.json', 'OpenAI_Scoring_Model_v4'],
    metrics: { latency: '165ms', chunks: 'Real-time', similarity: 'N/A', tokens: '315' }
  }
];

export const InteractiveAgentPlayground = () => {
  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(3); // initially completed

  const runSimulation = () => {
    setIsRunning(true);
    setActiveStep(0);
    setTimeout(() => {
      setActiveStep(1);
      setTimeout(() => {
        setActiveStep(2);
        setTimeout(() => {
          setActiveStep(3);
          setIsRunning(false);
        }, 600);
      }, 600);
    }, 500);
  };

  return (
    <section id="playground" className="scroll-mt-24">
      <div className="bento-card p-5 sm:p-8 bg-card/70 border border-border/80 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 mb-2">
              <Sparkles className="size-3.5" />
              <span>Interactive Tech Demonstration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              LangGraph &amp; RAG Agent Workflow Simulator
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
              Experience the cyclic state graphs, vector retrieval, and citation verification engines that power Mohana's AI systems.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={runSimulation}
              disabled={isRunning}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {isRunning ? (
                <>
                  <RotateCcw className="size-4 animate-spin" />
                  <span>Executing Pipeline...</span>
                </>
              ) : (
                <>
                  <Play className="size-4 fill-current" />
                  <span>Run Agent Workflow</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preset Selector Tabs */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
          {PRESETS.map((preset) => {
            const isSelected = selectedPreset.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => {
                  setSelectedPreset(preset);
                  setActiveStep(3);
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-blue-500/60 bg-blue-500/10 text-foreground ring-1 ring-blue-500/30 shadow-xs'
                    : 'border-border/60 bg-background/50 hover:bg-muted/60 text-muted-foreground'
                }`}
              >
                <div className="font-semibold text-xs sm:text-sm text-foreground mb-0.5 line-clamp-1">
                  {preset.title}
                </div>
                <div className="text-[11px] text-muted-foreground line-clamp-1 font-mono">
                  {preset.system}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Playground Canvas */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Workflow Graph Nodes (Left Column - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {/* Input Query Card */}
            <div className="p-3.5 rounded-xl border border-border/70 bg-background/80 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 shrink-0 mt-0.5">
                <Terminal className="size-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                  Input Prompt / Query Payload
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground mt-0.5 leading-snug">
                  "{selectedPreset.query}"
                </p>
              </div>
            </div>

            {/* State Graph Steps */}
            <div className="space-y-2.5">
              {selectedPreset.workflow.map((step, idx) => {
                const isStepActive = activeStep >= idx + 1;
                const isCurrentProcessing = activeStep === idx && isRunning;

                return (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isStepActive
                        ? 'border-emerald-500/40 bg-emerald-500/5 shadow-2xs'
                        : isCurrentProcessing
                        ? 'border-blue-500/50 bg-blue-500/10 ring-1 ring-blue-500 animate-pulse'
                        : 'border-border/60 bg-card/30 opacity-60'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-background border border-border/80">
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                            <span>Step {idx + 1}: {step.node}</span>
                            {isStepActive && (
                              <CheckCircle2 className="size-3.5 text-emerald-500" />
                            )}
                          </div>
                          <div className="text-[11px] text-muted-foreground mt-0.5">
                            {step.status}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase px-2 py-0.5 rounded bg-muted/60">
                        {isStepActive ? 'DONE' : isCurrentProcessing ? 'EXEC' : 'IDLE'}
                      </span>
                    </div>
                    <div className="mt-2 text-[11px] font-mono text-muted-foreground/80 pl-8">
                      ↳ {step.details}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Real-time Output & Citations Panel (Right Column - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Output Box */}
            <div className="p-4 rounded-xl border border-border/80 bg-background/90 flex flex-col justify-between flex-1 shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/60">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <FileCheck className="size-3.5 text-emerald-500" />
                    <span>Synthesized Output</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20">
                    Grounded Answer
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-sans">
                  {selectedPreset.output}
                </p>

                {/* Citations List */}
                <div className="mt-4 pt-3 border-t border-border/50">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Source Grounded Citations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPreset.citations.map((cite, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20"
                      >
                        <span className="size-1.5 rounded-full bg-blue-500" />
                        {cite}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Execution Telemetry Metrics */}
              <div className="mt-4 pt-3 border-t border-border/60 grid grid-cols-2 gap-2 text-center">
                <div className="p-2 rounded-lg bg-muted/40 border border-border/50">
                  <div className="text-[10px] font-mono text-muted-foreground">LATENCY</div>
                  <div className="text-xs font-bold text-foreground font-mono mt-0.5">{selectedPreset.metrics.latency}</div>
                </div>
                <div className="p-2 rounded-lg bg-muted/40 border border-border/50">
                  <div className="text-[10px] font-mono text-muted-foreground">TOKENS</div>
                  <div className="text-xs font-bold text-foreground font-mono mt-0.5">{selectedPreset.metrics.tokens}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAgentPlayground;
