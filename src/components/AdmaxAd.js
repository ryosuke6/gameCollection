"use client";
import React, { useEffect } from 'react';

const AdmaxAd = ({ adId }) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (!window.admaxads) {
                window.admaxads = [];
            }

            let admaxads = window.admaxads;
            if (!admaxads.some(ad => ad.admax_id === adId)) {
                admaxads.push({ admax_id: adId, type: 'switch' });
            }

            const tag = document.createElement('script');
            tag.src = 'https://adm.shinobi.jp/st/t.js';
            tag.async = true;
            document.body.appendChild(tag);

            return () => {
                document.body.removeChild(tag);
                window.admaxads = admaxads.filter(ad => ad.admax_id !== adId);
            };
        }
    }, [adId]);

    return <div className="admax-switch" data-admax-id={adId} style={{ display: 'inline-block' }} />;
};

export default AdmaxAd;
