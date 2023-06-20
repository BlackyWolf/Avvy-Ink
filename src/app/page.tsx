import { Button, Checkbox, Divider, Input, Logo } from '@/components';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import loginBackground from '@/public/images/pexels-pavel-danilyuk-6593532-login-bg.jpg';

export default function Home() {
    return (
        <div className="flex flex-grow bg-white">
            <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <Logo className="text-4xl" />

                        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Not a member?{' '}
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Start a 14 day free trial
                            </a>
                        </p>
                    </div>

                    <div className="mt-10">
                        <form action="#" method="POST" className="space-y-6">
                            <Input type="email" name="email" label="Email address" autoComplete="email" required />
                            <Input type="password" name="password" label="Password" autoComplete="current-password" required />

                            <div className="flex items-center justify-between">
                                <Checkbox name="rememberMe" label="Remember me" />

                                <div className="text-sm leading-6">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <Button color="indigo">
                                Sign in
                            </Button>
                        </form>

                        {/* <div className="mt-10">
                            <Divider text="Or continue with" />

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <Button color="blue" className="space-x-2">
                                    <FontAwesomeIcon icon={faTwitter} size="lg" />

                                    <span className="text-sm font-semibold leading-6 ml-2">Twitter</span>
                                </Button>
                                <Button color="light" className="space-x-2">
                                    <FontAwesomeIcon icon={faGithub} size="lg" />

                                    <span className="text-sm font-semibold leading-6">Twitter</span>
                                </Button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="relative flex-1 w-0 hidden md:block">
                <span className="absolute z-20 bottom-5 right-10 text-white">
                    photo by <span className="font-black">Pavel Danilyuk</span> from pexels
                </span>

                <Image
                    src={loginBackground}
                    className="absolute inset-0 h-full w-full object-cover"
                    alt="Sad face missing bg"
                />
            </div>
        </div>
    );
}
