import Spline from '@splinetool/react-spline/next';
import React from 'react'

export function RobotScene() {
  return (
    <main style={{ height: '600px', width: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spline
        scene="https://prod.spline.design/o40IsJLU9w3sDo2h/scene.splinecode"
      />
    </main>
  )
}
