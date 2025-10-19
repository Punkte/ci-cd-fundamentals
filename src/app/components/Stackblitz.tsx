'use client'

import React, { useEffect, useRef, useState } from 'react'
type Props = {
  name: string;
  height?: number;
  view?: "preview" | "editor" | "both",
  openFile?: string;
  hideExplorer?: boolean;
  showDevtools?: boolean;
}

const Stackblitz = (props: Props) => {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null)

  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {

    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries
        setShow(s => !s ? entry.isIntersecting : true)
    })

    if (containerRef.current) {
      observer.current.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.current?.unobserve(containerRef.current)
      }
    }

  }, [show]);

  return (
    <>
    {
      show ? (
        <div
          style={{ backgroundColor: '#222', height: props.height ?? 600 }}
        >
          <iframe
            src={`https://stackblitz.com/edit/${props.name}?embed=1&hideExplorer=${props.hideExplorer ? 1 : 0}&file=${props.openFile}&view=${props.view ? props.view : 'editor'}&devToolsHeight=${props.showDevtools ? "50" : "0"}`}
            height={props.height ?? 600}
            style={{ width: "100%" }}
          />
        </div>
      ) : (
        <div ref={containerRef} style={{ height: props.height ?? 600, backgroundColor: '#222'}}></div>
      )
    }
    </>
  )
}

export default Stackblitz;