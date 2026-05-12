interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    const renderPageNumbers = () => {
        const pages = [];
        const showEllipsis = totalPages > 5;

        if (!showEllipsis) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => onPageChange(i)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            currentPage === i 
                            ? "border-2 border-accent-green font-bold" 
                            : "hover:opacity-70"
                        }`}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            const pagesToShow = [1, 2, 3, '...', totalPages];
            return pagesToShow.map((p, i) => (
                typeof p === 'number' ? (
                    <button
                        key={i}
                        onClick={() => onPageChange(p)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            currentPage === p 
                            ? "border-2 border-accent-green font-bold" 
                            : "hover:opacity-70"
                        }`}
                    >
                        {p}
                    </button>
                ) : (
                    <span key={i} className="opacity-50">...</span>
                )
            ));
        }

        return pages;
    };

    return (
        <div className="flex justify-center items-center gap-4 pt-12">
            <button 
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-full bg-accent-green text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 1L1.5 8L8.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <div className="bg-accent-background rounded-full px-8 py-3 flex items-center gap-6 text-accent-green font-bold text-lg">
                {renderPageNumbers()}
            </div>

            <button 
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-full bg-accent-green text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1L8.5 8L1.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    );
}
