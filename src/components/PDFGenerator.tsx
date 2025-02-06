import html2pdf from "html2pdf.js";

const Factura = () => {
    const generarPDF = () => {
        const element = document.getElementById("factura");
        const opciones = {
            filename: "factura-clinica.pdf",
            image: { type: "png", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
            css: ['../css/general.css']
        };
        html2pdf().from(element).set(opciones).save();
    };

    return (
        <div>
            <button onClick={generarPDF}>Generar Factura PDF</button>
            <div className="invoice" id="factura">
                <div className="text-group">
                    <h3 className="name">C.C.A Centro Clínico a su Alcance</h3>
                    <h3 className="name">C.C.A</h3>
                    <div>
                        <p>Argentina, Mar de Plata, avenida 12 frente a Arroz y Desgracias</p>
                        <p>Cedula Juridica: 3-192-1987</p>
                        <p>Tel: +52 123 456 7890</p>
                        <p>consultas@centroclinicoasualcanze.com</p>
                        <p>www.centroclinicoasualcanze.com</p>
                    </div>
                </div>

                <div className="invoice-icon">
                    <img src="/logoInvoice.svg" alt="Logo image that represente our brand"></img>
                </div>

                <h1 className="title-invoice-number">
                    Factura Electronica No FAC-202500182828212929012
                </h1>

                <div className="table-invoice">
                    <div className="row">
                        <h3>Cliente</h3>
                        <h5>Juan Pérez</h5>
                    </div>
                    <div className="row">
                        <h3>ID Cliente</h3>
                        <h5>ID-45678</h5>
                    </div>
                    <div className="row">
                        <h3>Factura Electronica No</h3>
                        <h5>FAC-202500182828212929012</h5>
                    </div>
                    <div className="row">
                        <h3>Fecha de emisión</h3>
                        <h5>2025-01-01</h5>
                    </div>
                    <div className="row">
                        <h3>Fecha de vencimiento</h3>
                        <h5>2025-01-15</h5>
                    </div>
                </div>

                <div className="container-table-invoice">
                    <table>
                        <thead>
                            <tr>
                                <th>Descripción</th>
                                <th style={{ textAlign: "right" }}>Cantidad</th>
                                <th style={{ textAlign: "right" }}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Examen de sangre</td>
                                <td style={{ textAlign: "right" }}>1</td>
                                <td style={{ textAlign: "right" }}>$200.00</td>
                            </tr>
                                <tr>
                                <td>Consulta médica general</td>
                                <td style={{ textAlign: "right" }}>1</td>
                                <td style={{ textAlign: "right" }}>$300.00</td>
                            </tr>
                                <tr>
                                <td>Rayos X</td>
                                <td style={{ textAlign: "right" }}>2</td>
                                <td style={{ textAlign: "right" }}>$300.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-invoice">
                    <div className="row">
                        <h3>Subtotal</h3>
                        <h5>$800.00</h5>
                    </div>
                    <div className="row">
                        <h3>Impuestos (9%)</h3>
                        <h5>$128.00</h5>
                    </div>
                    <div className="row">
                        <h3>Total</h3>
                        <h5>$928.00</h5>
                    </div>
                </div>

                <footer className="footer">
                    <div>
                        <h3><i className="ri-checkbox-circle-fill"></i>Derechos y Condiciones:</h3>
                        <p>
                            Todos nuestros servicios están orientados a satisfacer las necesidades de salud de nuestros pacientes, garantizando una atención continua, eficiente y de calidad.
                            Los datos personales y médicos de nuestros pacientes son tratados con la más estricta confidencialidad, de acuerdo con las leyes vigentes de protección de datos personales. Ninguna información será divulgada sin el consentimiento explícito del paciente, salvo que sea requerido por la ley.
                        </p>
                    </div>
                </footer>
                <footer className="float-footer">
                    <h3>Contacto</h3>
                    <p>www.medpoint.com | +123 2254-8212 | medpointclinic@medpoint.org</p>
                </footer>
            </div>
        </div>
    )
}

export default Factura;
