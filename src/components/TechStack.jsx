
export default function TechStack({ name, logoUrl, icon }) {
    return (
        <div className="techHability" data-tech={name}>
            {logoUrl ? (
                <img src={logoUrl} width={40} className="logoWhite" alt={name} />
            ) : icon ? (
                <div className="logoWhite" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--color-light-green)' }}>
                    {icon}
                </div>
            ) : null}
            <h1 className="techName">{name}</h1>
        </div>
    );
}

           
          