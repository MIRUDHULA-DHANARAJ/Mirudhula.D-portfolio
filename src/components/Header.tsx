export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Your Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  