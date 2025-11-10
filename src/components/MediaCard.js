import "bootstrap/dist/css/bootstrap.css";

export default function Cards({ title, image }) {
  return (
    <div style={{ width: "340px", height: "250px", borderRadius: "30px",  marginLeft: "40px", marginRight:"40px", backgroundColor: "white"}}>
      <img src={image} alt="..." style={{overflow: "hidden", width: "100%", height: "70%", objectFit: "cover", borderTopLeftRadius: "30px", borderTopRightRadius: "30px"}} />
      <div>
        <br/>
        <p style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent:"center", fontSize: "1.3rem"}}>
            {title}
        </p>
      </div>
    </div>
  );
}
