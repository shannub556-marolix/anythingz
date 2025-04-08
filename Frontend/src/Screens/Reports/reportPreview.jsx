import React, { useState } from "react";

const ReportPreview = ({ data, reportTitle }) => {
    const [showPreview, setShowPreview] = useState(true);

    const handlePreview = () => {
        setShowPreview(true);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <h1>Report Generator</h1>
            {showPreview && (
                <div>
                    {/* Report Preview Section */}
                    <div id="report-preview" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{reportTitle}</h2>

                        <table border="1" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                            <thead>
                                <tr>
                                    {data && data.length > 0 && Object.keys(data[0]).map((key, index) => (
                                        <th key={index} style={{ padding: "10px", textAlign: "left", background: "#f0f0f0" }}>
                                            {key}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.length > 0 && data.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {Object.values(row).map((value, colIndex) => (
                                            <td key={colIndex} style={{ padding: "10px", textAlign: "left" }}>
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p style={{ textAlign: "right" }}>
                            <strong>Total Records:</strong> {data && data.length}
                        </p>
                    </div>

                    {/* Print Button */}
                    <button onClick={handlePrint} style={{ marginTop: "20px" }}>
                        Print Report
                    </button>
                </div>
            )}
        </div>
    );
};


export default ReportPreview;
