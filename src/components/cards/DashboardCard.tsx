interface typeData { text: string, subText: string }

export function DashboardCard({text, subText}: typeData) {
    return (
        <article className="cardDashboard">
            <h1><i className="ri-brain-line"></i>{text}</h1>
            <p>{subText}</p>
        </article>
    )
}