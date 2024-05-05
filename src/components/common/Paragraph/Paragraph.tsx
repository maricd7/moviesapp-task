import React from 'react'
import styles from './Paragraph.module.css'


interface ParagraphProps {
    text:string;
}

export default function Paragraph({text}:ParagraphProps) {
  return (
    <p className={styles.paragraph}>{text}</p>
  )
}
