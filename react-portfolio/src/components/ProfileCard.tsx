import '../App.css'
import './styles/ProfileCard.css'
import headshot_photo from '../assets/headshot.jpg'
import GradientBorder from '../components/GradientBorder.tsx'

export default function ProfileCard() {
  return (
    <GradientBorder borderClass="gradient-border profile-border">
      <div className="profile-card">
        <div className="profile-text">
          <h1>Dallin Wright</h1>
          <h2>Portfolio</h2>
        </div>
        <div>
          <img className="headshot-photo" src={headshot_photo} alt="Dallin Wright headshot"></img>
        </div>
      </div>
    </GradientBorder>
  )
}
