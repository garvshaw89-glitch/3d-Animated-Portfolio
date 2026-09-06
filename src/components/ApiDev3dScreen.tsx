import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Database, Cloud, Activity, CheckCircle2 } from 'lucide-react';

interface ApiDev3dScreenProps {
  className?: string;
}

export const ApiDev3dScreen: React.FC<ApiDev3dScreenProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full h-full bg-[#070b14] overflow-hidden rounded-2xl border border-cyan-500/30 flex flex-col justify-between p-4 sm:p-5 select-none ${className}`}
      style={{
        perspective: '800px',
        boxShadow: 'inset 0 0 30px rgba(6, 182, 212, 0.15), 0 10px 30px rgba(0, 0, 0, 0.8)',
      }}
    >
      {/* 3D Animated Background Grid & Rays */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating 3D Main Window */}
      <motion.div
        animate={{
          rotateX: [2, -2, 2],
          rotateY: [-3, 3, -3],
          y: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full h-full flex flex-col justify-between"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <div className="flex items-center gap-1.5 ml-2 text-[10px] sm:text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>API Gateway v3.2</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* 3D Endpoints Stream */}
        <div className="flex-1 my-3 flex flex-col justify-center gap-2 font-mono text-xs">
          {/* Endpoint 1 */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2 truncate">
              <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold">
                POST
              </span>
              <span className="text-slate-200 text-[11px] sm:text-xs truncate">
                /api/v1/ai/inference
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 200 OK
              </span>
              <span className="text-cyan-400/80 text-[10px]">12ms</span>
            </div>
          </div>

          {/* Endpoint 2 */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2 truncate">
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                GET
              </span>
              <span className="text-slate-200 text-[11px] sm:text-xs truncate">
                /api/v1/models/weights
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 200 OK
              </span>
              <span className="text-cyan-400/80 text-[10px]">8ms</span>
            </div>
          </div>

          {/* Endpoint 3 */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2 truncate">
              <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400 text-[10px] font-bold">
                WS
              </span>
              <span className="text-slate-200 text-[11px] sm:text-xs truncate">
                /ws/live-stream
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-purple-300 text-[10px]">LIVE SYNC</span>
              <span className="text-cyan-400/80 text-[10px]">0.4ms</span>
            </div>
          </div>
        </div>

        {/* 3D Metrics Bar */}
        <div className="pt-2 border-t border-cyan-500/20 grid grid-cols-3 gap-2 text-center font-mono">
          <div className="bg-cyan-950/40 p-1.5 rounded-lg border border-cyan-500/20">
            <div className="text-[9px] uppercase text-slate-400 flex items-center justify-center gap-1">
              <Activity className="w-2.5 h-2.5 text-cyan-400" />
              <span>Throughput</span>
            </div>
            <div className="text-xs font-bold text-cyan-300 mt-0.5">14.8k req/s</div>
          </div>
          <div className="bg-cyan-950/40 p-1.5 rounded-lg border border-cyan-500/20">
            <div className="text-[9px] uppercase text-slate-400 flex items-center justify-center gap-1">
              <Cpu className="w-2.5 h-2.5 text-emerald-400" />
              <span>P99 Latency</span>
            </div>
            <div className="text-xs font-bold text-emerald-300 mt-0.5">9.4 ms</div>
          </div>
          <div className="bg-cyan-950/40 p-1.5 rounded-lg border border-cyan-500/20">
            <div className="text-[9px] uppercase text-slate-400 flex items-center justify-center gap-1">
              <Database className="w-2.5 h-2.5 text-indigo-400" />
              <span>Uptime</span>
            </div>
            <div className="text-xs font-bold text-indigo-300 mt-0.5">99.99%</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
