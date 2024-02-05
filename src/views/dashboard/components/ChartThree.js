import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../style.css';

const ChartThree = ({ base64String }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const decodeBase64 = () => {
      try {
        const binaryData = atob(base64String);

        const mime = 'image/png';
        const arrayBuffer = new ArrayBuffer(binaryData.length);
        const uint8Array = new Uint8Array(arrayBuffer);

        for (let i = 0; i < binaryData.length; i++) {
          uint8Array[i] = binaryData.charCodeAt(i);
        }

        const blob = new Blob([arrayBuffer], { type: mime });
        const dataUrl = URL.createObjectURL(blob);

        setImageSrc(dataUrl);

        return () => URL.revokeObjectURL(dataUrl);
      } catch (error) {
        console.error('Error decoding base64 string:', error);
      }
    };

    if (base64String) {
      decodeBase64();
    }
  }, [base64String]);

  return (<div style={{ width: '40vw' }}>
      {imageSrc ? (<img src={imageSrc} alt="" />) : (<div className="parent-container">
          <div className="loader"></div>
        </div>)}
    </div>);
};

ChartThree.propTypes = {
  base64String: PropTypes.string.isRequired,
};

export default ChartThree;
