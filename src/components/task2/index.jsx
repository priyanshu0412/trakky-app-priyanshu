import React, { useEffect, useState } from "react";

// -----------------------------------------------

const TaskTwo = () => {
    const pageSize = 100;

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://20.193.149.47:2242/salons/service/?page=1")
            .then((res) => {
                if (!res.ok) throw new Error("Network response not ok");
                return res.json();
            })
            .then((data) => {
                const arrayData = Array.isArray(data) ? data : data.results || [];
                setAllData(arrayData);
                setFilteredData(arrayData);
                setCurrentPage(1);
                setLoading(false);
            })
            .catch(() => {
                setAllData([]);
                setFilteredData([]);
                setLoading(false);
            });
    }, []);

    const onSearchChange = (e) => {
        const val = e.target.value.toLowerCase();
        setSearchTerm(val);
        if (!val) {
            setFilteredData(allData || []);
            setCurrentPage(1);
            return;
        }
        const filtered = (allData || []).filter((item) =>
            item.service_name?.toLowerCase().includes(val)
        );
        setFilteredData(filtered);
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const currentPageData = (filteredData || []).slice(startIndex, startIndex + pageSize);

    const goPrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goNext = () => {
        if (startIndex + pageSize < (filteredData || []).length) setCurrentPage(currentPage + 1);
    };

    return (
        <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
            <h2 style={{ textAlign: "center", marginBottom: 16 }}>Services Table</h2>

            <input
                type="text"
                placeholder="Search service name..."
                value={searchTerm}
                onChange={onSearchChange}
                style={{
                    width: "100%",
                    padding: 10,
                    fontSize: 16,
                    borderRadius: 4,
                    border: "1px solid #ccc",
                    marginBottom: 20,
                    boxSizing: "border-box",
                }}
                autoComplete="off"
            />

            {/* Scrollable Table Wrapper */}
            <div style={{ overflowX: "auto" }}>
                <table style={{ width: "max-content", minWidth: "100%", borderCollapse: "collapse" }}>
                    <thead style={{ backgroundColor: "#007bff", color: "white" }}>
                        <tr>
                            <th style={{ padding: 8, border: "1px solid #ddd" }}>ID</th>
                            <th style={{ padding: 8, border: "1px solid #ddd" }}>Service Name</th>
                            <th style={{ padding: 8, border: "1px solid #ddd" }}>Price</th>
                            <th style={{ padding: 8, border: "1px solid #ddd" }}>Discount</th>
                            <th style={{ padding: 8, border: "1px solid #ddd" }}>Duration</th>
                            <th style={{ padding: 8, border: "1px solid #ddd" }}>Gender</th>
                            <th style={{ padding: 8, border: "1px solid #ddd" }}>Salon Name</th>
                            <th style={{ padding: 8, border: "1px solid #ddd" }}>City</th>
                            <th style={{ padding: 8, border: "1px solid #ddd" }}>Area</th>
                            <th style={{ padding: 8, border: "1px solid #ddd" }}>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={11} style={{ textAlign: "center", padding: 20 }}>
                                    Loading...
                                </td>
                            </tr>
                        ) : !(filteredData || []).length ? (
                            <tr>
                                <td colSpan={11} style={{ textAlign: "center", padding: 20 }}>
                                    No Data Available
                                </td>
                            </tr>
                        ) : (
                            currentPageData.map((service) => {
                                const { days, hours, minutes } = service.service_time || {};
                                let duration = "";
                                if (days) duration += `${days}d `;
                                if (hours) duration += `${hours}h `;
                                if (minutes) duration += `${minutes}m`;
                                duration = duration.trim() || "N/A";

                                return (
                                    <tr
                                        key={service.id}
                                        style={{ cursor: "pointer", borderBottom: "1px solid #ddd" }}
                                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f2f2f2"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "white"; }}
                                    >
                                        <td style={{ padding: 8, border: "1px solid #ddd" }}>{service.id}</td>
                                        <td style={{ padding: 8, border: "1px solid #ddd" }}>{service.service_name}</td>
                                        <td style={{ padding: 8, border: "1px solid #ddd" }}>{service.price}</td>
                                        <td style={{ padding: 8, border: "1px solid #ddd" }}>{service.discount}</td>
                                        <td style={{ padding: 8, border: "1px solid #ddd" }}>{duration}</td>
                                        <td style={{ padding: 8, border: "1px solid #ddd" }}>{service.gender}</td>
                                        <td style={{ padding: 8, border: "1px solid #ddd" }}>{service.salon_name || "N/A"}</td>
                                        <td style={{ padding: 8, border: "1px solid #ddd" }}>{service.city || "N/A"}</td>
                                        <td style={{ padding: 8, border: "1px solid #ddd" }}>{service.area || "N/A"}</td>
                                        <td style={{ padding: 8, border: "1px solid #ddd" }}>
                                            {new Date(service.created_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: 16, textAlign: "center" }}>
                <button
                    onClick={goPrev}
                    disabled={currentPage === 1}
                    style={{
                        backgroundColor: currentPage === 1 ? "#ccc" : "#007bff",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        marginRight: 8,
                        borderRadius: 4,
                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                        opacity: currentPage === 1 ? 0.6 : 1,
                    }}
                >
                    Previous
                </button>
                <button
                    onClick={goNext}
                    disabled={startIndex + pageSize >= (filteredData || []).length}
                    style={{
                        backgroundColor:
                            startIndex + pageSize >= (filteredData || []).length ? "#ccc" : "#007bff",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: 4,
                        cursor:
                            startIndex + pageSize >= (filteredData || []).length ? "not-allowed" : "pointer",
                        opacity: startIndex + pageSize >= (filteredData || []).length ? 0.6 : 1,
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TaskTwo;
