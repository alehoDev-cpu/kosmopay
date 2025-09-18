import React from "react";
import { cn } from "@/lib";
import BoxArrowDown from "@/assets/icons/box-arrow-down.svg?react";
import sectionJettons from "/assets/section-jettons.png";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const BuyJettonsSection = ({ className }: Props) => {
  const clickUrl = "https://t.me/KosmoAppbot";

  const handleSectionClick = () => {
    window.open(clickUrl, "_blank", "noopener,noreferrer");
  };

  const handleSectionKeyDown: React.KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSectionClick();
    }
  };

  const stop: React.MouseEventHandler = (e) => e.stopPropagation();
  const stopKey: React.KeyboardEventHandler = (e) => e.stopPropagation();

  return (
    <section
      role="link"
      tabIndex={0}
      aria-label="Подробнее о покупке жетонов"
      onClick={handleSectionClick}
      onKeyDown={handleSectionKeyDown}
      className={cn(
        "w-full rounded-[32px] md:p-12 p-4 primary-bg relative flex flex-col items-center md:items-start md:gap-6 overflow-hidden cursor-pointer outline-none focus:ring-2 focus:ring-white/50",
        className
      )}
    >
      <img
        src={`${sectionJettons}?v=${Date.now()}`}
        alt="section diamonds"
        className="object-contain size-[230px] md:hidden"
        onClick={stop}
        onKeyDown={stopKey}
      />

      <h2 className="z-1 text-white text-center md:text-left text-[32px] md:text-[48px] leading-[115%]">
        Купить жетоны можно здесь!
      </h2>

      <div
        className="mt-4 md:mt-0 flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8 z-1 w-full md:w-auto"
        onClick={stop}
        onKeyDown={stopKey}
      >
        <div className="flex items-center gap-4">
          {/* Локальная ссылка продолжает работать отдельно */}
          <Link to="https://t.me/ррр" target="_blank" onClick={stop} onKeyDown={stopKey}>
            <h3 className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
              Подробнее
            </h3>
          </Link>
          <BoxArrowDown className="size-9 fill-white" />
        </div>

        <div className="flex items-center gap-3 md:gap-8">
          {["Без комиссии", "Зачисление за 10 минут"].map((item) => (
            <div
              key={item}
              className="flex items-center p-3 w-auto md:px-8 md:py-4 rounded-full bg-[#4C33C3]"
              onClick={stop}
              onKeyDown={stopKey}
            >
              <h4 className="text-white text-sm md:text-[24px]">{item}</h4>
            </div>
          ))}
        </div>
      </div>

      <img
        src={sectionJettons}
        alt="section diamonds"
        className="hidden md:block object-contain w-full max-w-100 absolute bottom-[-100px] right-0"
        onClick={stop}
        onKeyDown={stopKey}
      />
    </section>
  );
};
