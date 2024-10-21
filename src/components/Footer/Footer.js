import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube , faSpotify, faFacebook} from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"
const Footer=()=>{
    return(
        <footer>
            <div className="footer-title">The Generics</div>
            <div className="footer-icons">
                <ul className="ul-icons">
                    <li>
                        <a>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000" width="40" height="40">
                              <path d="M23.498 6.186c-.279-1.043-1.096-1.848-2.132-1.91C19.153 4.05 12 4.05 12 4.05S4.847 4.05 2.634 4.276C1.597 4.338.78 5.043.5 6.186.224 7.339.151 8.643.08 9.953.015 11.249.09 12.558.377 13.721.553 14.64 1.644 15.826 2.657 15.958c2.2.222 9.844.22 9.844.22s7.644 0 9.844-.222c1.021-.132 2.105-1.318 2.263-2.568.276-1.332.406-2.621.434-3.921.029-1.311-.169-2.624-.445-3.944zM9.54 15.053V8.647l6.73 3.203-6.73 3.203z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a>
                            
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1DB954" width="24" height="24">
  <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.626 0 12-5.373 12-12C24 5.373 18.627 0 12 0zm6.293 17.707c-.294.294-.768.295-1.064 0-.293-.293-.294-.768 0-1.061 1.168-1.167 1.935-2.452 1.935-3.949 0-1.497-.768-2.782-1.935-3.949-.293-.293-.293-.768 0-1.061.294-.293.768-.293 1.064 0 1.488 1.488 2.452 3.397 2.452 5.01 0 1.614-.964 3.522-2.452 5.01zm-5.292-1.34c-1.906 0-3.684-1.116-4.564-2.754-.191-.319-.083-.746.236-.937.319-.191.746-.083.937.236.788 1.275 2.168 2.063 3.628 2.063 1.378 0 2.617-.784 3.314-1.925.242-.383.737-.493 1.12-.252.383.241.493.737.252 1.12-1.096 1.697-2.897 2.752-4.743 2.752zm4.038-4.968c-.159-.241-.488-.318-.748-.156-1.067.677-2.308 1.064-3.545 1.064-1.228 0-2.35-.383-3.391-1.065-.239-.161-.318-.488-.157-.747.161-.239.488-.318.748-.157 1.005.652 2.129 1.015 3.302 1.015 1.151 0 2.25-.346 3.208-.97.239-.161.319-.488.157-.748z"/>
</svg>

                        </a>
                    </li>
                    <li>
                        <a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" width="24" height="24">
  <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.351C0 23.406.594 24 1.325 24h11.511v-9.294h-3.13V11.76h3.13V8.76c0-3.1 1.893-4.78 4.658-4.78 1.32 0 2.459.098 2.787.143v3.23l-1.912.001c-1.496 0-1.785.712-1.785 1.758v2.302h3.571l-.466 3.946h-3.105V24h6.093c.73 0 1.325-.594 1.325-1.325V1.325C24 .594 23.406 0 22.675 0z"/>
</svg>

                        </a>

                    </li>

                </ul>
            </div>
        </footer>
    )

}

export default Footer;