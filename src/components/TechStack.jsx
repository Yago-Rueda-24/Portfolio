
export default function TechStack({name, logoUrl}) {
    return (
        <div className="techHability" data-tech={name}>
            <img src={logoUrl} width={40} className="logoWhite" alt={name} />
            <h1 className="techName">{name}</h1>
        </div>
    );
}

           
          