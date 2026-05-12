import Button from "./Button";

export default function GuideSteps() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
                <div className="space-y-4">
                    <h2>Veilig in 3 simpele stappen.</h2>
                    <p className="text-body-green opacity-80 font-body">Uw digitale kameleon regelt het meeste, u doet de rest.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-accent-background rounded-[32px] p-10 flex flex-col items-center text-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                            📥
                        </div>
                        <h3 className="text-xl font-bold text-title-green">Installeer Kamil</h3>
                        <p className="text-body-green text-sm leading-relaxed font-body">
                            Eén klik en uw browser is beveiligd. Snel, simpel en onzichtbaar.
                        </p>
                    </div>

                    <div className="bg-accent-background rounded-[32px] p-10 flex flex-col items-center text-center gap-6 border-2 border-accent-green/5">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                            🌐
                        </div>
                        <h3 className="text-xl font-bold text-title-green">Surf zoals altijd</h3>
                        <p className="text-body-green text-sm leading-relaxed font-body">
                            U hoeft niets anders te doen; Kamil waakt over u op de achtergrond.
                        </p>
                    </div>

                    <div className="bg-accent-background rounded-[32px] p-10 flex flex-col items-center text-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                            💡
                        </div>
                        <h3 className="text-xl font-bold text-title-green">Blijf op de hoogte</h3>
                        <p className="text-body-green text-sm leading-relaxed font-body">
                            Lees onze korte blogposts over de nieuwste phishing-trucs.
                        </p>
                    </div>
                </div>

                <Button href="#">
                    Installeer Kamil nu gratis
                </Button>
            </div>
        </section>
    );
}
