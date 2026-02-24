import { SlOptionsVertical } from "react-icons/sl";
import { formatDateTime } from "../utils/formatTimeDate";

function MemberCard({ name, isAdmin, join_date }) {
  return (
    <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
          <img
            alt="Alex Rivers avatar"
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdThhrERKmo7aVtUCmtpDESFaN3FdH1wYuHykiwP1YDDz2u5UZ3Dy8qvq8NAIWD6ZLtmYCw2Wb3iDMSMWg4wJ8CawSuPaOXnKRcdixmXePD-myu25IldM_xN8eBBtdpCcGUA8quAnz17-x2OIzamYmO-rnZMD4mTQRlvU71vguw1-hx4ItZX7QHXuoQArgsPI3d_xcx8cye-r5zqSVAJkrF8aOSxz5WEXLSkzC_VHVz4nCT3HTfQ9y-9ZFNtdPvq2SIKEsJdNkaVES"
          />
        </div>
        <div>
          <h4 class="font-semibold text-slate-900 dark:text-slate-100">
            {name}
          </h4>
          <span class="text-xs mr-5 px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider">
            {formatDateTime(join_date)}
          </span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider">
            {isAdmin}
          </span>
        </div>
      </div>
      <button class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
        <SlOptionsVertical />
      </button>
    </div>
  );
}

export default MemberCard;
