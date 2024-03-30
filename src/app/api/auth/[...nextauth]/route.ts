import NextAuth from 'next-auth';
import { authOptions } from '../../../../framework/auth/NextAuth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
