import '../App.css'

import { CgMail } from "react-icons/cg";
import { MdSchool } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"

interface Props {
  type: string;
}

const SIZE = 64;

export default function SocialButton({ type }: Props) {
  var icon:React.ReactElement = (<></>);
  var link:string = "";
  
  switch (type) {
    case "email":
        icon = (<CgMail size={SIZE} color="black" />);
        link = "mailto:dallinlw@gmail.com";
      break;

    case "byu":
        icon = (<MdSchool size={SIZE} color="black" />);
        link = "mailto:dlwright@byu.edu";
      break;

    case "github":
        icon = (<FaGithub size={SIZE} color="black" />);
        link = "https://github.com/Leeway001Write";
      break;

    case "linkedin":
        icon = (<FaLinkedin size={SIZE} color="black" />);
        link = "https://www.linkedin.com/in/dallin-lee-wright/";
      break;

    default:
      console.warn("Unknown social type:", type);
      break;
  }


  
	return (
    <a className="social-button" href={ link } target="_blank">
      { icon }
    </a>
	)
}
