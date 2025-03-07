// menu.js
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Menu.css';
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [numPages, setNumPages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the menu data when the component mounts
        fetch('/menu.json')
            .then(response => response.json())
            .then(data => {
                setMenuItems(data.map(item => ({ ...item, open: false })));
                setNumPages(new Array(data.length).fill(0));
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching the menu JSON:", error);
                setLoading(false);
            });
    }, []);

    const toggleAccordion = (index) => {
        setMenuItems(menuItems.map((item, i) => {
            if (i === index) {
                return { ...item, open: !item.open };
            }
            return item;
        }));
    };

    const onDocumentLoadSuccess = (index, { numPages }) => {
        setNumPages(prevNumPages => {
            const newNumPages = [...prevNumPages];
            newNumPages[index] = numPages;
            return newNumPages;
        });
    };

    return (
        <>
            <div className="menu-section">
                <h1>Menu</h1>
                {loading ? (
                    <p>Loading Menu...</p>
                ) : (
                    menuItems.map((item, index) => (
                        <div key={index} className="accordion-item">
                            <button
                                className="accordion-button"
                                type="button"
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.name}
                            </button>
                            {item.open && (
                                <div className="accordion-content">
                                    <Document
                                        file={item.path}
                                        onLoadSuccess={(result) => onDocumentLoadSuccess(index, result)}
                                        onLoadError={console.error}
                                        loading={<div>Loading Menu...</div>}
                                        className="pdf-document"
                                    >
                                        {Array.from(
                                            new Array(numPages[index]),
                                            (el, pageIndex) => (
                                                <Page
                                                    key={`page_${pageIndex + 1}`}
                                                    pageNumber={pageIndex + 1}
                                                    width={400}
                                                />
                                            )
                                        )}
                                    </Document>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
            <center>
                <a href="tel:+441433623093" className="book-table-section">
                    <button>Book a Table</button>
                </a>
            </center>
        </>
    );
};

export default Menu;
