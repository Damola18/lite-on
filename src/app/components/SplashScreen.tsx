import Image from 'next/image'
// import SplashLogo from "@/assets/images/Battery1013.jpg"
import SplashLogo from "@/app/assets/images/BatteryNew.png"

const SplashScreen = () => {
  return (
    <div
      className="flex h-screen items-center justify-center animate-pulse">
        <Image src={SplashLogo} alt="splash_logo"/>
    </div>
  )
}

export default SplashScreen;

