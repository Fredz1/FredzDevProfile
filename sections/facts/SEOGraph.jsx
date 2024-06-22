import { useRef  } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const SEOGraph = ({ data }) => { 

  const barsRef = useRef(null);
  const isInView = useInView(barsRef)

  return (
    <AnimatePresence mode="wait">
      <svg width="882" height="367" viewBox="0 0 882 367" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Y-axis lines */}
        <path d="M34 1L66 1.5"      stroke="#AFAFAF"  />
        <path d="M34 41.5L66 42"    stroke="#AFAFAF"  />
        <path d="M34 82L66 82.5"    stroke="#AFAFAF"  />
        <path d="M34 122.5L66 123"  stroke="#AFAFAF"  />
        <path d="M34 163L66 163.5"  stroke="#AFAFAF"  />
        <path d="M34 203.5L66 204"  stroke="#AFAFAF"  />
        <path d="M34 244L66 244.5"  stroke="#AFAFAF"  />
        <path d="M34 284.5L66 285"  stroke="#AFAFAF"  />
        <path d="M34 325L66 325.5"  stroke="#AFAFAF"  />
        <path d="M34 365.5H882"     stroke="#AFAFAF"  />
                
        {/* Traffic word */ }
        <path d="M26.24 209.496C26.24 210.248 26.168 210.888 26.024 211.416C25.88 211.928 25.656 212.352 25.352 212.688C25.048 213.024 24.656 213.264 24.176 213.408C23.68 213.552 23.072 213.624 22.352 213.624H11.744C11.52 213.624 11.328 213.6 11.168 213.552C11.008 213.504 10.888 213.408 10.808 213.264C10.712 213.12 10.664 212.896 10.664 212.592C10.664 212.288 10.712 212.056 10.808 211.896C10.888 211.736 11.008 211.632 11.168 211.584C11.312 211.536 11.496 211.512 11.72 211.512H22.352C22.768 211.512 23.104 211.48 23.36 211.416C23.6 211.336 23.784 211.224 23.912 211.08C24.04 210.92 24.12 210.712 24.152 210.456C24.184 210.2 24.2 209.888 24.2 209.52C24.2 209.264 24.224 209.056 24.272 208.896C24.32 208.736 24.416 208.616 24.56 208.536C24.704 208.456 24.92 208.416 25.208 208.416C25.512 208.416 25.744 208.464 25.904 208.56C26.048 208.64 26.136 208.768 26.168 208.944C26.216 209.104 26.24 209.288 26.24 209.496ZM14.888 214.872L14.912 212.568L14.864 209.232C14.864 209.008 14.888 208.816 14.936 208.656C14.968 208.496 15.064 208.376 15.224 208.296C15.368 208.2 15.592 208.152 15.896 208.152C16.2 208.152 16.432 208.192 16.592 208.272C16.736 208.352 16.832 208.472 16.88 208.632C16.928 208.792 16.952 208.984 16.952 209.208L16.904 212.496L16.928 214.92C16.928 215.256 16.848 215.488 16.688 215.616C16.528 215.728 16.264 215.784 15.896 215.784C15.544 215.784 15.288 215.712 15.128 215.568C14.968 215.424 14.888 215.192 14.888 214.872ZM26.24 204.889C26.24 205.193 26.192 205.425 26.096 205.585C26.016 205.729 25.896 205.825 25.736 205.873C25.56 205.905 25.36 205.921 25.136 205.921H15.68C15.44 205.921 15.24 205.897 15.08 205.849C14.92 205.801 14.808 205.705 14.744 205.561C14.664 205.417 14.624 205.185 14.624 204.865C14.624 204.577 14.664 204.361 14.744 204.217C14.808 204.057 14.912 203.953 15.056 203.905C15.184 203.841 15.336 203.809 15.512 203.809L16.232 203.905C16.024 203.793 15.816 203.665 15.608 203.521C15.4 203.361 15.216 203.169 15.056 202.945C14.88 202.705 14.736 202.425 14.624 202.105C14.512 201.769 14.456 201.361 14.456 200.881C14.456 200.641 14.48 200.417 14.528 200.209C14.56 199.985 14.616 199.777 14.696 199.585C14.776 199.377 14.872 199.201 14.984 199.057C15.08 198.913 15.192 198.801 15.32 198.721C15.432 198.625 15.568 198.577 15.728 198.577C16.08 198.577 16.384 198.689 16.64 198.913C16.88 199.137 17 199.369 17 199.609C17 199.817 16.976 199.969 16.928 200.065C16.864 200.161 16.8 200.257 16.736 200.353C16.672 200.433 16.616 200.553 16.568 200.713C16.504 200.873 16.472 201.129 16.472 201.481C16.472 201.721 16.52 201.977 16.616 202.249C16.712 202.505 16.856 202.753 17.048 202.993C17.224 203.233 17.456 203.433 17.744 203.593C18.032 203.737 18.368 203.809 18.752 203.809H25.184C25.408 203.809 25.6 203.833 25.76 203.881C25.92 203.929 26.04 204.033 26.12 204.193C26.2 204.337 26.24 204.569 26.24 204.889ZM26.216 187.385C26.216 187.737 26.144 187.993 26 188.153C25.856 188.297 25.632 188.385 25.328 188.417L24.128 188.321C24.384 188.481 24.68 188.729 25.016 189.065C25.336 189.401 25.624 189.841 25.88 190.385C26.12 190.929 26.24 191.593 26.24 192.377C26.24 193.145 26.088 193.865 25.784 194.537C25.48 195.193 25.056 195.777 24.512 196.289C23.968 196.785 23.344 197.177 22.64 197.465C21.936 197.737 21.184 197.873 20.384 197.873C19.6 197.873 18.864 197.737 18.176 197.465C17.472 197.177 16.856 196.777 16.328 196.265C15.8 195.753 15.384 195.169 15.08 194.513C14.776 193.841 14.624 193.129 14.624 192.377C14.624 191.673 14.72 191.073 14.912 190.577C15.088 190.081 15.328 189.657 15.632 189.305C15.92 188.937 16.248 188.617 16.616 188.345L15.608 188.393C15.256 188.409 15.008 188.337 14.864 188.177C14.704 188.001 14.624 187.729 14.624 187.361C14.624 187.057 14.672 186.841 14.768 186.713C14.864 186.569 15 186.473 15.176 186.425C15.352 186.377 15.568 186.353 15.824 186.353H25.088C25.312 186.353 25.512 186.377 25.688 186.425C25.864 186.473 25.992 186.569 26.072 186.713C26.168 186.857 26.216 187.081 26.216 187.385ZM24.224 192.017C24.224 191.377 24.056 190.793 23.72 190.265C23.384 189.721 22.936 189.297 22.376 188.993C21.8 188.673 21.144 188.513 20.408 188.513C19.656 188.513 19 188.681 18.44 189.017C17.864 189.337 17.416 189.769 17.096 190.313C16.76 190.841 16.592 191.425 16.592 192.065C16.592 192.817 16.768 193.473 17.12 194.033C17.456 194.577 17.912 195.009 18.488 195.329C19.064 195.649 19.72 195.809 20.456 195.809C21.176 195.809 21.824 195.649 22.4 195.329C22.96 195.009 23.408 194.569 23.744 194.009C24.064 193.433 24.224 192.769 24.224 192.017ZM26.24 181.164C26.24 181.468 26.192 181.692 26.096 181.836C26.016 181.98 25.896 182.076 25.736 182.124C25.56 182.172 25.36 182.196 25.136 182.196H16.928L16.952 183.468C16.952 183.788 16.872 184.012 16.712 184.14C16.536 184.268 16.256 184.332 15.872 184.332C15.504 184.332 15.248 184.26 15.104 184.116C14.944 183.972 14.864 183.74 14.864 183.42L14.888 182.196H13.064C12.44 182.196 11.888 182.124 11.408 181.98C10.928 181.836 10.528 181.604 10.208 181.284C9.888 180.948 9.64 180.516 9.464 179.988C9.288 179.46 9.2 178.82 9.2 178.068C9.2 177.844 9.224 177.652 9.272 177.492C9.32 177.332 9.416 177.204 9.56 177.108C9.704 177.012 9.936 176.964 10.256 176.964C10.56 176.964 10.792 177.012 10.952 177.108C11.096 177.204 11.192 177.332 11.24 177.492C11.288 177.652 11.312 177.852 11.312 178.092C11.312 178.572 11.344 178.964 11.408 179.268C11.472 179.556 11.624 179.764 11.864 179.892C12.104 180.02 12.488 180.084 13.016 180.084H14.912C14.896 179.684 14.888 179.3 14.888 178.932C14.872 178.564 14.864 178.172 14.864 177.756C14.864 177.484 14.864 177.156 14.864 176.772C14.864 176.388 14.872 176.004 14.888 175.62H13.064C12.44 175.62 11.888 175.548 11.408 175.404C10.928 175.26 10.528 175.028 10.208 174.708C9.888 174.372 9.64 173.94 9.464 173.412C9.288 172.884 9.2 172.244 9.2 171.492C9.2 171.268 9.224 171.076 9.272 170.916C9.32 170.756 9.416 170.628 9.56 170.532C9.704 170.436 9.936 170.388 10.256 170.388C10.56 170.388 10.792 170.436 10.952 170.532C11.096 170.628 11.192 170.756 11.24 170.916C11.288 171.076 11.312 171.276 11.312 171.516C11.312 171.996 11.344 172.388 11.408 172.692C11.472 172.98 11.624 173.188 11.864 173.316C12.104 173.428 12.488 173.484 13.016 173.484H14.912L14.84 171.204C14.84 170.98 14.864 170.788 14.912 170.628C14.96 170.468 15.064 170.348 15.224 170.268C15.368 170.172 15.592 170.124 15.896 170.124C16.184 170.124 16.408 170.172 16.568 170.268C16.728 170.348 16.832 170.468 16.88 170.628C16.928 170.772 16.952 170.956 16.952 171.18C16.92 171.516 16.912 171.892 16.928 172.308C16.928 172.708 16.92 173.1 16.904 173.484H25.208C25.416 173.484 25.6 173.516 25.76 173.58C25.92 173.628 26.04 173.732 26.12 173.892C26.2 174.036 26.24 174.268 26.24 174.588C26.24 174.876 26.192 175.1 26.096 175.26C26.016 175.404 25.896 175.5 25.736 175.548C25.56 175.596 25.36 175.62 25.136 175.62H16.928C16.928 175.78 16.928 175.996 16.928 176.268C16.928 176.524 16.936 176.788 16.952 177.06C16.952 177.332 16.952 177.556 16.952 177.732C16.952 177.924 16.944 178.26 16.928 178.74C16.912 179.22 16.904 179.668 16.904 180.084H25.208C25.416 180.084 25.6 180.108 25.76 180.156C25.92 180.204 26.04 180.308 26.12 180.468C26.2 180.628 26.24 180.86 26.24 181.164ZM26.24 167.46C26.24 167.748 26.192 167.972 26.096 168.132C26.016 168.292 25.896 168.396 25.736 168.444C25.576 168.476 25.384 168.492 25.16 168.492H15.704C15.48 168.492 15.288 168.468 15.128 168.42C14.968 168.372 14.848 168.276 14.768 168.132C14.672 167.972 14.624 167.74 14.624 167.436C14.624 167.116 14.672 166.884 14.768 166.74C14.864 166.596 14.992 166.5 15.152 166.452C15.312 166.404 15.512 166.38 15.752 166.38H25.184C25.408 166.38 25.6 166.404 25.76 166.452C25.92 166.5 26.04 166.604 26.12 166.764C26.2 166.908 26.24 167.14 26.24 167.46ZM11.768 167.46C11.768 167.796 11.72 168.052 11.624 168.228C11.512 168.404 11.36 168.524 11.168 168.588C10.976 168.636 10.752 168.66 10.496 168.66C10.24 168.66 10.024 168.636 9.848 168.588C9.656 168.524 9.52 168.404 9.44 168.228C9.344 168.036 9.296 167.772 9.296 167.436C9.296 167.084 9.344 166.828 9.44 166.668C9.536 166.492 9.68 166.38 9.872 166.332C10.064 166.268 10.288 166.236 10.544 166.236C10.8 166.236 11.024 166.268 11.216 166.332C11.392 166.38 11.528 166.492 11.624 166.668C11.72 166.828 11.768 167.092 11.768 167.46ZM26.288 157.723C26.288 158.555 26.152 159.339 25.88 160.075C25.608 160.795 25.216 161.435 24.704 161.995C24.192 162.539 23.584 162.971 22.88 163.291C22.16 163.595 21.344 163.747 20.432 163.747C19.52 163.747 18.712 163.595 18.008 163.291C17.288 162.971 16.672 162.539 16.16 161.995C15.648 161.451 15.256 160.819 14.984 160.099C14.712 159.363 14.576 158.587 14.576 157.771C14.576 157.227 14.664 156.691 14.84 156.163C15 155.635 15.216 155.171 15.488 154.771C15.744 154.355 16.016 154.059 16.304 153.883C16.512 153.723 16.688 153.611 16.832 153.547C16.96 153.467 17.112 153.459 17.288 153.523C17.416 153.587 17.536 153.675 17.648 153.787C17.744 153.899 17.824 154.011 17.888 154.123C18.112 154.411 18.144 154.699 17.984 154.987C17.808 155.163 17.648 155.363 17.504 155.587C17.344 155.795 17.2 156.019 17.072 156.259C16.944 156.499 16.848 156.747 16.784 157.003C16.704 157.243 16.664 157.499 16.664 157.771C16.664 158.523 16.824 159.187 17.144 159.763C17.448 160.339 17.888 160.787 18.464 161.107C19.024 161.411 19.68 161.563 20.432 161.563C21.184 161.563 21.84 161.411 22.4 161.107C22.96 160.787 23.4 160.347 23.72 159.787C24.04 159.211 24.2 158.555 24.2 157.819C24.2 157.483 24.16 157.163 24.08 156.859C23.984 156.539 23.864 156.243 23.72 155.971C23.56 155.699 23.392 155.475 23.216 155.299C23.104 155.139 23.008 155.003 22.928 154.891C22.848 154.779 22.808 154.643 22.808 154.483C22.808 154.355 22.864 154.219 22.976 154.075C23.072 153.931 23.224 153.779 23.432 153.619C23.576 153.491 23.728 153.419 23.888 153.403C24.048 153.371 24.2 153.395 24.344 153.475C24.488 153.555 24.632 153.683 24.776 153.859C25.032 154.115 25.28 154.459 25.52 154.891C25.744 155.307 25.928 155.763 26.072 156.259C26.216 156.755 26.288 157.243 26.288 157.723Z" fill="black" />
        
        {/* <path d="M123 61H385V365H123V61Z" fill="url(#paint0_linear_167_241)"/> */ }
        
            <>
              <rect
                initial={ { height: 0 } }
                animate={ { height: 270 } }
                key="barone"
                x="123"
                y="95"
                width="262"
                height="270"
                fill="url(#paint0_linear_167_241)"
              />
              <rect
                key="barTwo"
                x="474"
                y="180"
                width="262"
                height="185"
                fill="url(#paint1_linear_167_241)"
              />
            </>
        

        
          
          {/* <rect x="123" y="61" width="262" height="10" fill="#E79518" /> */}
        
        <defs>
          <linearGradient id="paint0_linear_167_241"
            x1="254"
            y1="61"
            x2="254"
            y2="365"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E79518" stopOpacity="0.5"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>

          <linearGradient id="paint1_linear_167_241"
            x1="605"
            y1="180"
            x2="605"
            y2="365"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#737373"/>
            <stop offset="0.175" stopColor="#A4A4A4"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
        </defs>
      </svg>
    </AnimatePresence>
  );
}

export default SEOGraph;