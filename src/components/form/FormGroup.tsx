"use client";

type FormGroupProps = {
    children: React.ReactNode;
};
  
export default function FormGroup({ children }: FormGroupProps) {
    return <div className="space-y-5">{children}</div>;
}