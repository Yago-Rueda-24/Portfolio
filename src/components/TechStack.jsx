
export default function TechStack({name, logoUrl}) {
    return (
        <div className="techHability">
            <img src={logoUrl} width={40} className="logoWhite" />
            <h1 className="techName">{name}</h1>
        </div>
    );
}

           
          