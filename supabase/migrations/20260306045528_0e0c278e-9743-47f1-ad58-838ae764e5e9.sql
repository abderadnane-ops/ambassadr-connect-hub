CREATE TABLE public.access_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  region TEXT NOT NULL,
  cohort TEXT,
  role_in_network TEXT,
  coordinator_name TEXT,
  motivation TEXT,
  document_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.access_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert access requests"
  ON public.access_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
