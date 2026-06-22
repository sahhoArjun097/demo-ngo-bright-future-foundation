import {
  ArrowLeft,
  Check,
  CheckCircle,
  Copy,
  CreditCard,
  Download,
  Heart,
  Lock,
  QrCode,
  Shield,
  Smartphone,
  Sparkles,
  Wallet,
} from "lucide-react";
import { useState, useEffect } from "react";
import QRCode from "qrcode";
import { DONATION_AMOUNTS } from "../../../constant/constants";

const DonationCard = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<number | "">("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const upiId = import.meta.env.VITE_UPI_ID;
  const generateQR = async (amount: number) => {
    const upiUrl = `upi://pay?pa=${upiId}&pn=Ganga%20Social%20Foundation&am=${amount}&cu=INR&tn=Donation`;

    try {
      const dataUrl = await QRCode.toDataURL(upiUrl, {
        width: 200,

        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      });
      setQrDataUrl(dataUrl);
    } catch (error) {
      console.error("QR generation failed:", error);
    }
  };
  useEffect(() => {
    if (selectedAmount === 0 && customAmount && customAmount > 0) {
      generateQR(customAmount);
    }
  }, [customAmount, selectedAmount]);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    if (amount !== 0) setCustomAmount("");
    const finalAmt = amount === 0 ? 0 : amount;
    generateQR(finalAmt);
    setTimeout(() => setIsFlipped(true), 300);
  };

  const handleReset = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setSelectedAmount(0);
      setCustomAmount("");
      setQrDataUrl("");
    }, 400);
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayAmount =
    selectedAmount === 0 ? customAmount || "0" : selectedAmount || "0";
  const finalAmount = displayAmount;

  // Download QR as image
  const handleDownloadQR = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = `donation-qr-${finalAmount}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center justify-center  p-4">
      <div
        className="relative w-full max-w-sm"
        style={{ perspective: "500px" }}
      >
        <div
          className="relative w-full transition-transform duration-700 ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 w-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                80G Tax Benefit Available
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Make a Donation
            </h2>

            <div className="flex bg-gray-100 rounded-xl p-1 mb-5">
              <button
                onClick={() => setIsMonthly(false)}
                className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  !isMonthly
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                One-time
              </button>
              <button
                onClick={() => setIsMonthly(true)}
                className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isMonthly
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Monthly
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              {DONATION_AMOUNTS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAmountClick(item.amount)}
                  className={`relative p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                    selectedAmount === item.amount
                      ? "border-indigo-600 bg-indigo-50 shadow-sm"
                      : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                  }`}
                >
                  {item.amount > 0 ? (
                    <div className="text-base font-bold text-gray-900">
                      ₹{item.amount.toLocaleString()}
                    </div>
                  ) : (
                    <div className="text-sm font-bold text-gray-900">
                      Custom
                    </div>
                  )}
                  <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                    {item.label}
                  </div>
                  {selectedAmount === item.amount && (
                    <CheckCircle className="absolute top-1.5 right-1.5 w-3.5 h-3.5 text-indigo-600" />
                  )}
                </button>
              ))}
            </div>

            {/* Impact */}
            {selectedAmount !== null && (
              <div className="mb-5 bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                <div className="flex items-center gap-2">
                  <Heart
                    className="w-4 h-4 text-emerald-600 shrink-0"
                    fill="currentColor"
                  />
                  <p className="text-xs text-emerald-700 font-medium">
                    {DONATION_AMOUNTS.find((a) => a.amount === selectedAmount)
                      ?.impact || "Your contribution makes a difference"}
                  </p>
                </div>
              </div>
            )}

            {selectedAmount === null && (
              <div className="mb-5 bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <QrCode className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                <p className="text-xs text-gray-500">
                  Select an amount to generate payment QR
                </p>
              </div>
            )}

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 pt-3 border-t border-gray-100">
              <Lock className="w-3 h-3" />
              <span>Secure payment • Instant tax receipt</span>
            </div>
          </div>

          <div
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl w-full h-[615px] flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-violet-600 to-primary" />

            <div className="absolute inset-0 backdrop-blur-[1px] bg-white/[0.02]" />

            <div className="relative z-10 flex flex-col h-full p-6">
              <button
                onClick={handleReset}
                className="group flex items-center gap-2 text-white/50 hover:text-white transition-all duration-300 text-xs font-medium mb-6 self-start"
              >
                <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </div>
                <span>Change Amount</span>
              </button>

              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md rounded-full px-4 py-1.5 mb-3 border border-white/10 shadow-inner">
                  <Wallet className="w-3.5 h-3.5 text-violet-300" />
                  <span className="text-[11px] font-semibold text-violet-200 tracking-wide uppercase">
                    {isMonthly ? "Monthly" : "One-time"}
                  </span>
                </div>

                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-medium text-white/60">₹</span>
                  <h2 className="text-5xl font-bold text-white tracking-tight">
                    {finalAmount}
                  </h2>
                </div>

                {isMonthly && (
                  <p className="text-xs text-violet-300/60 mt-1 font-medium">
                    per month
                  </p>
                )}
              </div>

              <div className="flex-1 flex flex-col items-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-violet-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative bg-white rounded-2xl p-1 shadow-2xl border border-white/20">
                    <div className="relative mt-2">
                      {qrDataUrl && (
                        <img
                          src={qrDataUrl}
                          alt="Payment QR"
                          className="w-40 h-40 rounded-xl"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-white/30 mt-3 font-medium">
                  Valid for 15 minutes
                </p>
              </div>
              <div className="mt-auto space-y-3">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-xl p-2.5 border border-white/10">
                        <Smartphone className="w-4 h-4 text-violet-300" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">
                          UPI ID
                        </p>
                        <p className="font-mono font-bold text-white text-sm tracking-wider">
                          {upiId}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyUPI}
                      className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-[11px] font-bold transition-all duration-300 ${
                        copied
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-white/25"
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleDownloadQR}
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-xs font-bold transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <Download className="w-4 h-4" />
                    Save QR
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 shadow-lg shadow-white/10">
                    <CreditCard className="w-4 h-4" />
                    Other
                  </button>
                </div>

                <div className="flex justify-center gap-2">
                  {["GPay", "PhonePe", "Paytm", "Any UPI"].map((app) => (
                    <div
                      key={app}
                      className="bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 text-[11px] font-semibold text-white/60 hover:text-white/90 border border-white/10 transition-all duration-300 cursor-default"
                    >
                      {app}
                    </div>
                  ))}
                </div>

                <div className="text-center pt-1">
                  <p className="text-[10px] text-white/25 flex items-center justify-center gap-1.5 font-medium">
                    <Shield className="w-3 h-3" />
                    <span>256-bit encrypted · Bank-grade security</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
