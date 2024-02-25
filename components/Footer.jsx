import { AiOutlineGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='footer-container'>
      <p>{new Date().getFullYear()} ® Anha 2024</p>
      <p className='icons'>
        <AiOutlineGithub />
      </p>
    </div>
  )
}
