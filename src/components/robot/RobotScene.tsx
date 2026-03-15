import Spline from '@splinetool/react-spline/next';
import React from 'react'

export function RobotScene() {
  return (
    <div className="h-[80vh] w-full md:w-[90vw] fixed right-0 top-0 pointer-events-none">
      <div className="h-full w-full">
        <Spline
          scene="https://prod.spline.design/o40IsJLU9w3sDo2h/scene.splinecode"
        />
      </div>
    </div>
  )
}
