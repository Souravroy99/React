// OptimalTiling_UI.jsx
// Single-file React component (Tailwind CSS expected in project)
// Paste into a Vite + React project to preview. No external libs required.

import React, { useState } from 'react'

// Helper: ceil division
const cdiv = (a, b) => Math.floor((a + b - 1) / b)

export default function OptimalTilingUI() {
  const [L, setL] = useState(6)
  const [W, setW] = useState(4)
  const [A, setA] = useState(1)
  const [X, setX] = useState(2)
  const [B, setB] = useState(2)
  const [Y, setY] = useState(3)
  const [C, setC] = useState(3)
  const [Z, setZ] = useState(6)
  const [result, setResult] = useState(null)

  // Cost of tiling a rectangle LxW using only tile of side s with unit cost costPer
  const costSingle = (LL, WW, s, costPer) => {
    const nx = cdiv(LL, s)
    const ny = cdiv(WW, s)
    const count = nx * ny
    return { count, cost: count * costPer, nx, ny }
  }

  // For a rectangle compute best single-tile option (A,B,C)
  const bestSingleForRect = (LL, WW) => {
    const a = costSingle(LL, WW, A, X)
    const b = costSingle(LL, WW, B, Y)
    const c = costSingle(LL, WW, C, Z)
    const arr = [ {tile:'A', side:A, ...a}, {tile:'B', side:B, ...b}, {tile:'C', side:C, ...c} ]
    arr.sort((p,q)=> p.cost - q.cost || p.side - q.side)
    return arr[0]
  }

  // Heuristic: consider pure strategies and one-axis splits (vertical & horizontal)
  const computeBest = () => {
    const LL = Number(L)
    const WW = Number(W)
    if (!LL || !WW) return

    // Pure options
    const pureA = costSingle(LL, WW, A, X)
    const pureB = costSingle(LL, WW, B, Y)
    const pureC = costSingle(LL, WW, C, Z)

    let best = {
      kind: 'pure',
      breakdown: { A:0, B:0, C:0 },
      totalCost: Infinity,
      details: null
    }

    const pushPure = (tileName, obj) => {
      const res = { kind:'pure', breakdown:{A:0,B:0,C:0}, totalCost: obj.cost, details: { tile: tileName, nx: obj.nx, ny: obj.ny } }
      res.breakdown[tileName] = obj.count
      if (res.totalCost < best.totalCost) best = res
    }

    pushPure('A', pureA)
    pushPure('B', pureB)
    pushPure('C', pureC)

    // Splits along length (vertical cut at x from 1..L-1)
    for (let x = 1; x <= LL-1; x++){
      const left = bestSingleForRect(x, WW)
      const right = bestSingleForRect(LL - x, WW)
      const totalCost = left.cost + right.cost
      if (totalCost < best.totalCost){
        const res = { kind:'split-vertical', splitAt: x, totalCost, breakdown:{A:0,B:0,C:0}, details:{ left, right } }
        res.breakdown[left.tile] += left.count
        res.breakdown[right.tile] += right.count
        best = res
      }
    }

    // Splits along width (horizontal cut at y from 1..W-1)
    for (let y = 1; y <= WW-1; y++){
      const top = bestSingleForRect(LL, y)
      const bottom = bestSingleForRect(LL, WW - y)
      const totalCost = top.cost + bottom.cost
      if (totalCost < best.totalCost){
        const res = { kind:'split-horizontal', splitAt: y, totalCost, breakdown:{A:0,B:0,C:0}, details:{ top, bottom } }
        res.breakdown[top.tile] += top.count
        res.breakdown[bottom.tile] += bottom.count
        best = res
      }
    }

    setResult({ best })
  }

  // Small helper to render a grid visualization for a rectangle tiled with one tile type
  const GridPreview = ({ rectW, rectH, side, nx, ny, label }) => {
    // scale so the preview fits, max dimension 360px
    const maxDim = 360
    const scale = Math.min(maxDim / rectW, maxDim / rectH)
    const cellW = Math.ceil((side * scale))
    const containerW = nx * cellW
    const containerH = ny * cellW
    return (
      <div className="p-2 border rounded-md">
        <div className="text-sm mb-2">{label} — tile {side}m ({nx}×{ny})</div>
        <div style={{ width: containerW, height: containerH, display: 'grid', gridTemplateColumns: `repeat(${nx}, ${cellW}px)`, gridAutoRows: `${cellW}px` }} className="gap-[1px] bg-neutral-300">
          {Array.from({length: nx*ny}).map((_,i)=> (
            <div key={i} className="flex items-center justify-center text-xs bg-white"> </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Optimal Tiling — Cost Minimizer</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <h3 className="font-medium mb-2">Room</h3>
          <div className="flex gap-2">
            <label className="flex flex-col text-sm">
              Length (m)
              <input type="number" value={L} onChange={e=>setL(Number(e.target.value))} className="mt-1 p-2 border rounded" />
            </label>
            <label className="flex flex-col text-sm">
              Width (m)
              <input type="number" value={W} onChange={e=>setW(Number(e.target.value))} className="mt-1 p-2 border rounded" />
            </label>
          </div>

          <h3 className="font-medium mt-4 mb-2">Tiles</h3>
          <div className="space-y-2">
            <div className="flex gap-2">
              <input className="w-16 p-2 border rounded" type="number" value={A} onChange={e=>setA(Number(e.target.value))} />
              <input className="w-20 p-2 border rounded" type="number" value={X} onChange={e=>setX(Number(e.target.value))} />
              <div className="text-sm self-center">Tile A (side m, cost)</div>
            </div>
            <div className="flex gap-2">
              <input className="w-16 p-2 border rounded" type="number" value={B} onChange={e=>setB(Number(e.target.value))} />
              <input className="w-20 p-2 border rounded" type="number" value={Y} onChange={e=>setY(Number(e.target.value))} />
              <div className="text-sm self-center">Tile B</div>
            </div>
            <div className="flex gap-2">
              <input className="w-16 p-2 border rounded" type="number" value={C} onChange={e=>setC(Number(e.target.value))} />
              <input className="w-20 p-2 border rounded" type="number" value={Z} onChange={e=>setZ(Number(e.target.value))} />
              <div className="text-sm self-center">Tile C</div>
            </div>
          </div>

          <button onClick={computeBest} className="mt-4 px-4 py-2 bg-sky-600 text-white rounded">Compute Optimal</button>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-medium mb-2">Result</h3>
          {!result && <div className="text-sm text-neutral-500">Hit "Compute Optimal" to evaluate.</div>}
          {result && (
            <div className="space-y-2">
              <div className="text-sm">Strategy: <strong>{result.best.kind}</strong></div>
              <div className="text-sm">Tiles of size A: <strong>{result.best.breakdown.A}</strong></div>
              <div className="text-sm">Tiles of size B: <strong>{result.best.breakdown.B}</strong></div>
              <div className="text-sm">Tiles of size C: <strong>{result.best.breakdown.C}</strong></div>
              <div className="text-sm">Total Cost: <strong>{result.best.totalCost}</strong></div>

              <div className="mt-3">
                {/* Visualization: if pure, show single grid; if split, show two previews */}
                {result.best.kind === 'pure' && (
                  (() => {
                    const chosen = result.best.details
                    const tileSide = chosen.tile === 'A' ? A : (chosen.tile === 'B' ? B : C)
                    const nx = chosen.nx
                    const ny = chosen.ny
                    return <GridPreview rectW={L} rectH={W} side={tileSide} nx={nx} ny={ny} label={`Pure tile ${chosen.tile}`} />
                  })()
                )}

                {result.best.kind === 'split-vertical' && (
                  <div className="flex gap-3">
                    <GridPreview rectW={result.best.splitAt} rectH={W} side={result.best.details.left.side} nx={result.best.details.left.nx} ny={result.best.details.left.ny} label={`Left (${result.best.splitAt}m)`} />
                    <GridPreview rectW={L - result.best.splitAt} rectH={W} side={result.best.details.right.side} nx={result.best.details.right.nx} ny={result.best.details.right.ny} label={`Right (${L - result.best.splitAt}m)`} />
                  </div>
                )}

                {result.best.kind === 'split-horizontal' && (
                  <div className="flex flex-col gap-3">
                    <GridPreview rectW={L} rectH={result.best.splitAt} side={result.best.details.top.side} nx={result.best.details.top.nx} ny={result.best.details.top.ny} label={`Top (${result.best.splitAt}m)`} />
                    <GridPreview rectW={L} rectH={W - result.best.splitAt} side={result.best.details.bottom.side} nx={result.best.details.bottom.nx} ny={result.best.details.bottom.ny} label={`Bottom (${W - result.best.splitAt}m)`} />
                  </div>
                )}

              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 text-sm text-neutral-600">
        <p><strong>Assumptions / Notes:</strong> This tool compares pure single-tile strategies and also considers splitting the room once (vertical or horizontal) and applying the best single-tile choice in each sub-rectangle. That split-heuristic often finds lower-cost mixed solutions without solving the full NP-hard packing problem. For small rooms you can enumerate splits quickly. For exact optimal tilings with arbitrary mixing, a more advanced tiling solver would be required.</p>
      </div>
    </div>
  )
}
