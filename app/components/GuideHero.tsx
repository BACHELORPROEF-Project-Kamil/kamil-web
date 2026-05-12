import Button from "./Button";

export default function GuideHero() {
    return (
        <section className="bg-accent-background py-20 px-6">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
                <span className="text-accent-green font-bold tracking-widest uppercase text-sm font-section-title">De Phishing Wiki</span>
                <h1 className="max-w-4xl mx-auto">
                    Word ook een kenner:<br />Leer phishing herkennen.
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-body-green font-body">
                    Kamil beschermt u op het web, maar kennis is uw tweede schild. In onze gids leggen we in begrijpelijke taal uit waar u op moet letten bij verdachte e-mails of vreemde berichten.
                </p>
                <Button href="#raad-van-kamil">
                    Naar de Tips & Gids
                </Button>
            </div>
        </section>
    );
}
