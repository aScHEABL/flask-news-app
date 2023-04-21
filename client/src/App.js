import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function App() {

  const [headlines, setHeadlines] = useState();

  useEffect(() => {
    fetch("/defaultView")
    .then((response) => response.json()
    .then((data) => {
      setHeadlines(data);
    })
    )
  }, [])
  
  // const headlinesNodes = headlines.articles.map((news) => <div>{news.title}</div>)

  const logoStyle = {
    width: '50%',
    height: '1%',
  }
  
  return (
    <Container bgColor='black'>
      <box as='div' style={logoStyle}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1024"
        height="768"
        version="1.1"
        viewBox="0 0 1024 768"
      >
          <linearGradient x1="30%" x2="-10%" y1="120%" y2="30%" spreadMethod="pad">
            <stop offset="0%" stopColor="#fff" stopOpacity="1"></stop>
            <stop offset="100%" stopColor="#000" stopOpacity="1"></stop>
          </linearGradient>
          <linearGradient
            x1="30%"
            x2="-10%"
            y1="120%"
            y2="30%"
            gradientTransform="rotate(-30)"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#fff" stopOpacity="1"></stop>
            <stop offset="50%" stopColor="#ccc" stopOpacity="1"></stop>
            <stop offset="100%" stopColor="#000" stopOpacity="1"></stop>
          </linearGradient>
          <g>
            <image width="480" height="480" x="272" y="144" display="none"></image>
            <g transform="translate(171.892)">
              <image x="0" y="0" display="none"></image>
              <g
                style={{
                  lineHeight: "1",
                  fontVariantLigatures: "normal",
                  WebkitTextAlign: "center",
                  textAlign: "center",
                }}
                fontFamily="Brandmark Sans 2 Color"
                fontSize="72"
                fontStyle="normal"
                fontWeight="normal"
                textAnchor="middle"
              >
                <path
                  fill="#216f82"
                  stroke="#216f82"
                  strokeMiterlimit="2"
                  strokeWidth="0"
                  d="M295.58-50.4L329.207.004h-11.593L296.013-32.83V.004h-10.514V-50.4h10.081zm33.627 0v38.955c-7.056-4.32-9.864-12.601-10.44-14.617V-50.4h10.44z"
                  ariaLabel="N"
                  className="c1"
                  transform="matrix(1.11 0 0 1.11 -157.404 412.012)"
                ></path>
                <path
                  fill="#216f82"
                  stroke="#216f82"
                  strokeMiterlimit="2"
                  strokeWidth="0"
                  d="M376.809-9.068V.149h-37.66v-50.405h36.868v9.217h-25.634V-9.14l26.426.072zm-19.37-11.377l1.296-9.217h14.833v9.217H357.44z"
                  ariaLabel="E"
                  className="c1"
                  transform="matrix(1.11 0 0 1.11 -152.964 412.012)"
                ></path>
                <path
                  fill="#216f82"
                  stroke="#216f82"
                  strokeMiterlimit="2"
                  strokeWidth="0"
                  d="M424.017-50.4L437.195.004h-9.578l-9.432-37.155L408.608.004h-11.954L381.102-50.4h12.024l9.938 37.371 9.648-37.371h11.305zm18.218 41.62c-6.913-4.177-6.697-10.225-6.697-10.514l8.137-31.106h11.45l-12.89 41.62z"
                  ariaLabel="W"
                  className="c1"
                  transform="matrix(1.11 0 0 1.11 -148.524 412.012)"
                ></path>
                <g ariaLabel="^S">
                  <path
                    fill="#216f82"
                    stroke="#216f82"
                    strokeMiterlimit="2"
                    strokeWidth="0"
                    d="M483.897-30.094c7.489 2.232 15.914 4.824 15.914 15.409 0 9.217-7.417 15.193-18.866 15.193-7.705 0-15.698-2.952-21.53-7.848l4.32-9.073c4.897 4.32 12.097 7.416 17.354 7.416 4.248 0 6.769-1.872 6.769-5.04 0-4.176-4.609-5.544-9.938-7.128l-1.727-.433c-2.593-1.151-3.89-2.664-3.961-6.48 0-1.584.648-3.312.648-3.312.576-1.585 1.656-2.52 2.16-3.097 1.584 2.089 5.04 3.169 8.857 4.321v.072z"
                    className="c1"
                    transform="matrix(1.11 0 0 1.11 -144.084 412.012)"
                  ></path>
                  <path
                    fill="#5bbe86"
                    stroke="#5bbe86"
                    strokeMiterlimit="2"
                    strokeWidth="0"
                    d="M465.896-26.782c-2.16-2.088-3.6-4.968-3.6-9.216 0-9.073 7.344-14.978 18.793-14.978 6.552 0 13.393 2.016 18.434 5.4l-4.25 9.29c-5.112-3.025-11.304-5.113-15.264-5.113a14.98 14.98 0 00-5.617 1.08c-3.817 1.512-5.76 4.248-6.12 4.752-.504.72-3.385 4.897-2.376 8.785z"
                    className="c3"
                    transform="matrix(1.11 0 0 1.11 -144.084 412.012)"
                  ></path>
                </g>
                <path
                  fill="#216f82"
                  stroke="#216f82"
                  strokeMiterlimit="2"
                  strokeWidth="0"
                  d="M556.7-28.51v17.353C551.947-4.1 543.595.436 533.657.436c-15.553 0-27.29-11.088-27.29-25.85 0-14.545 11.737-25.562 27.29-25.562 8.57 0 15.914 3.313 20.882 8.713l-9.72 5.76c-2.953-2.808-6.913-4.536-11.017-4.536-8.425 0-16.13 6.913-16.13 15.77 0 8.784 7.85 15.913 16.13 15.913 4.896 0 9.577-2.449 12.529-6.337v-3.456h-10.009v-9.217l20.378-.144z"
                  ariaLabel="G"
                  className="c1"
                  transform="matrix(1.11 0 0 1.11 -139.644 412.012)"
                ></path>
                <path
                  fill="#216f82"
                  stroke="#216f82"
                  strokeMiterlimit="2"
                  strokeWidth="0"
                  d="M605.172-.068h-12.745l-8.929-16.489h-7.272v16.49H564.92v-50.405h20.594c12.097 0 19.01 5.4 19.01 16.49 0 8.496-3.601 13.825-10.154 16.13L605.172-.069zM593.94-33.55c0-5.545-3.24-7.633-9.074-7.633h-8.712v15.41h8.712c5.761 0 9.074-2.16 9.074-7.777z"
                  ariaLabel="R"
                  className="c1"
                  transform="matrix(1.11 0 0 1.11 -135.204 412.012)"
                ></path>
                <path
                  fill="#216f82"
                  stroke="#216f82"
                  strokeMiterlimit="2"
                  strokeWidth="0"
                  d="M106.19287 74.79785L94.23975 74.79785 73.78955 125.20215 85.31104 125.20215 92.0791 106.84082 92.0791 106.84082 99.85596 86.74268 114.18506 125.20215 126.21045 125.20215z"
                  ariaLabel="A"
                  className="c1"
                  transform="matrix(1.11 0 0 1.11 -130.764 412.012) translate(534.837 -125.198)"
                ></path>
                <path
                  fill="#216f82"
                  stroke="#216f82"
                  strokeMiterlimit="2"
                  strokeWidth="0"
                  d="M696.488-50.472v9.505h-40.396v-9.505h40.396zm-25.923 15.193c5.257-4.176 11.233 0 11.233 0V-.068h-11.304v-35.21h.07z"
                  ariaLabel="T"
                  className="c1"
                  transform="matrix(1.11 0 0 1.11 -126.324 412.012)"
                ></path>
                <path
                  fill="#216f82"
                  stroke="#216f82"
                  strokeMiterlimit="2"
                  strokeWidth="0"
                  d="M740.184-9.068V.149h-37.66v-50.405h36.868v9.217h-25.634V-9.14l26.426.072zm-19.37-11.377l1.296-9.217h14.833v9.217h-16.129z"
                  ariaLabel="E"
                  className="c1"
                  transform="matrix(1.11 0 0 1.11 -121.884 412.012)"
                ></path>
              </g>
              <image
                width="150"
                height="150"
                x="-19"
                y="309"
                xlinkHref="data:image/png;base64,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"
              ></image>
            </g>
          </g>
        </svg>
      </box>
      {/* {headlinesNodes} */}
    </Container>
  )
}

export default App;