export default function SkillsSection() {
    return (
        <section className="p-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-6">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="bg-gray-200 px-3 py-1 rounded">C</span>
                    <span className="bg-gray-200 px-3 py-1 rounded">Python</span>
                    <span className="bg-gray-200 px-3 py-1 rounded">DataScience</span>
                    <span className="bg-gray-200 px-3 py-1 rounded">Machine Learning</span>
                    <span className="bg-gray-200 px-3 py-1 rounded">GitHub</span>
                    <span className="bg-gray-200 px-3 py-1 rounded">AutoCAD</span>
                </div>
            </div>
        </section>
    );
}