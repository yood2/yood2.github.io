const Resume = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <iframe
                src="../public/resume.pdf"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none', // Remove the default iframe border
                }}
                title="PDF Viewer"
            />
        </div>
    );
};

export default Resume;
