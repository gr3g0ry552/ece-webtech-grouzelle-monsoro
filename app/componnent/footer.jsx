import Image from "../public/index.png"

export default function Footer(){
  return (
    <footer style={{textAlign: "center", marginTop: "-1px"}} >
      <div className="footerImages" >
      <a href="https://github.com/gr3g0ry552/ece-webtech-grouzelle-monsoro">
        <img src={Image}></img>
      </a>
      <a href="https://www.ece.fr">
        <img src={Image}></img>
      </a>
      </div>
    </footer>
  )
}