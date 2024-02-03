import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ChartTwo = ({ base64String }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const decodeBase64 = () => {
      try {
        const binaryData = atob(base64String);

        const mime = 'image/png'; // Update this based on your image type
        const arrayBuffer = new ArrayBuffer(binaryData.length);
        const uint8Array = new Uint8Array(arrayBuffer);

        for (let i = 0; i < binaryData.length; i++) {
          uint8Array[i] = binaryData.charCodeAt(i);
        }

        const blob = new Blob([arrayBuffer], { type: mime });
        const dataUrl = URL.createObjectURL(blob);

        setTimeout(() => {
          setImageSrc(dataUrl);
          setIsLoading(false);
        }, 5000);

        return () => URL.revokeObjectURL(dataUrl);
      } catch (error) {
        console.error('Error decoding base64 string:', error);
      }
    };

    if (base64String) {
      decodeBase64();
    }
  }, [base64String]);

  return (
    <div style={{ width: '40vw' }}>
      {isLoading ? (
        <div className="parent-container">
          <div className="loader"></div>
        </div>
      ) : (
        <img src={imageSrc} alt="" />
      )}
    </div>
  );
};

ChartTwo.propTypes = {
  base64String: PropTypes.string.isRequired,
};

export default ChartTwo;
