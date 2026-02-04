import { useState } from "react";
import LandingScreen from "@/components/LandingScreen";
import ValentinePage from "@/components/ValentinePage";
import VideoGallery from "@/components/VideoGallery";

type Screen = "landing" | "valentine" | "gallery";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");

  const handleEnterFromLanding = () => {
    setCurrentScreen("valentine");
  };

  const handleBackToLanding = () => {
    setCurrentScreen("landing");
  };

  const handleYes = () => {
    setCurrentScreen("gallery");
  };

  const handleBackToValentine = () => {
    setCurrentScreen("valentine");
  };

  return (
    <div className="relative min-h-screen">
      {/* Landing screen */}
      <div
        className={`transition-opacity duration-500 ease-out ${
          currentScreen !== "landing" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <LandingScreen onEnter={handleEnterFromLanding} />
      </div>

      {/* Valentine page */}
      {currentScreen === "valentine" && (
        <div className="animate-fade-in">
          <ValentinePage onYes={handleYes} onBack={handleBackToLanding} />
        </div>
      )}

      {/* Video gallery */}
      <VideoGallery isVisible={currentScreen === "gallery"} onBack={handleBackToValentine} />
    </div>
  );
};

export default Index;
