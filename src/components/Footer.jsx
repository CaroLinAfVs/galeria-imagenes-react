import Button from 'react-bootstrap/Button';

function Footer (prop){
    return <div className="footer">
        <h4>{prop.text}</h4>
        <Button>Ver detalle</Button>
    </div>
}

export default Footer