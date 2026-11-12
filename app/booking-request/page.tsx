import { redirect } from 'next/navigation';
import { booksy } from '@/lib/booksy';

export default function BookingRequest() {
  redirect(booksy);
}
