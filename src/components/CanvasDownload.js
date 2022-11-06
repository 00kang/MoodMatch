import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { Canvas } from "./Canvas";

export function CanvasDownload() {
  const ref = useRef(null);
  // const ref = Canvas.canvasRef;

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "myDrawing.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      {/* 기존코드 */}
      <div ref={ref}>{}</div>
      <button onClick={onButtonClick}>완성</button>
      {/* <div ref={Canvas.canvasRef}></div>
      <button onClick={onButtonClick}>완성</button> */}
      {/* <div ref={ref}></div>
      <button onClick={() => Canvas.canvasRef.onButtonClick}>완성</button> */}
    </>
  );
}
