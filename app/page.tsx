/** @format */

import Link from 'next/link';
import { permanentRedirect } from 'next/navigation';
export default function Home() {
	permanentRedirect('./dashboard');
}
