import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Draw.module.css";
import { Canvas } from "./Canvas";
import { ClearCanvasButton } from "./ClearCanvasButton";
import { CanvasProvider } from "./CanvasContext";

function Draw() {
  return (
    <div>
      {/* HEADER */}
      <header className={styles.draw_Header}>
        <Link to="/">
          <img src="./img/logo_kids.png" alt="logo" />
        </Link>
      </header>

      {/* MAIN */}
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>내 그림과 어울리는 음악 추천 받기</div>

          <div className={styles.upload_drawing}>
            <CanvasProvider>
              <ClearCanvasButton />
              <Canvas />
            </CanvasProvider>
          </div>

          <Link to="/recommend">
            <button>완성</button>
          </Link>

          <div className={styles.tip}>
            TIP! 내가 표현하고 싶은 것을 단어와 함께 표현해보세요~
          </div>
        </div>
      </section>
    </div>
  );
}

export default Draw;
