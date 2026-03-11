import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, X } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumePreviewModal = ({ open, onOpenChange }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 glass-card border-border overflow-hidden">
      <DialogHeader className="px-6 pt-5 pb-3 flex flex-row items-center justify-between">
        <DialogTitle className="text-foreground font-display text-lg">Resume Preview</DialogTitle>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="BVSSS_Srinivas_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-primary text-primary-foreground glow-primary hover:-translate-y-0.5 transition-all"
          >
            <Download size={14} /> Download
          </a>
        </div>
      </DialogHeader>
      <div className="flex-1 px-4 pb-4 h-full">
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded-lg border border-border"
          title="Resume PDF Preview"
        />
      </div>
    </DialogContent>
  </Dialog>
);

export default ResumePreviewModal;
