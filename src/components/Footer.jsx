import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Ayesha Khan. Made with{' '}
        <FaHeart className="inline text-red-500" /> in Pakistan
      </p>
    </footer>
  );
}