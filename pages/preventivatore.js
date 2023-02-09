import React, { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

/* styles component */
import styles from "../styles/preventivatore.module.css"

export default function Preventivatore(props) {
  const [risparmio, setRisparmio] = useState(30)

  const handleChange = (e) => {
    setRisparmio(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Preventivatore: cerca il risparmio giusto in Termo </title>
        <meta
          name="description"
          content="Preventivatore: cerca il risparmio giusto in Termo "
        />
        <meta
          name="keywords"
          content="Termo.com - cerca il risparmio giusto in Termo "
        />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.inputContent}>
            <input
              data-cy="test"
              type="range"
              min="30"
              max="90"
              step="20"
              value={risparmio}
              className="range"
              id="myRange"
              onInput={handleChange}
            />
            <span id="rangeValue">{risparmio}%</span>
          </div>
          <div className={styles.slideContent}>
            {risparmio == 30 && (
              <>
                <p data-cy="slide30">Risparmio 30</p>
              </>
            )}
            {risparmio == "50" && (
              <>
                <p data-cy="slide50">Risparmio 50</p>
              </>
            )}
            {risparmio == "70" && (
              <>
                <p data-cy="slide70">Risparmio 70</p>
              </>
            )}
            {risparmio == "90" && (
              <>
                <p data-cy="slide90">Risparmio 90</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
