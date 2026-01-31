import { useRef } from "react"
import gsap from "gsap"

export default function BlobHover() {
  const boxRef = useRef(null)

  const handleMouseMove = (e) => {
    const box = boxRef.current
    const rect = box.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(box, {
      x: x * 0.15,
      y: y * 0.15,
      scaleX: 1 + Math.abs(x) / 300,
      scaleY: 1 + Math.abs(y) / 300,
      duration: 0.3,
      ease: "power3.out"
    })
  }

  const handleMouseLeave = () => {
    gsap.to(boxRef.current, {
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.4)"
    })
  }

  return (
    <div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="blob"
    >
      <h2>Hover me</h2>
    </div>
  )
}