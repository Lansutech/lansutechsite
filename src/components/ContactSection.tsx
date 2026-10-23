import { ArrowRight, Instagram, LoaderCircle } from 'lucide-react';
import { useContactForm } from '../hooks/use-contact-form';
import { ColorOrbits } from './SiteElements';

export default function ContactSection() {
  const { form, isSubmitting, submitStatus, onSubmit } = useContactForm();
  const { register, formState: { errors } } = form;
  return (
    <section id="contato" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-inner page-width">
        <div className="contact-copy">
          <h2 id="contact-title">Vamos simplificar<br />o próximo passo?</h2>
          <p>Conte o que sua empresa precisa.<br />Vamos pensar na solução juntos.</p>
          <address>
            <a href="mailto:lansutech@gmail.com">lansutech@gmail.com</a>
            <a href="https://wa.me/5544997415544" target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp (abre em nova aba)">+55 (44) 99741-5544</a>
            <a className="contact-social" href="https://www.instagram.com/lansutech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Lansutech: @lansutech (abre em nova aba)"><Instagram size={19} aria-hidden="true" /><span>@lansutech</span></a>
            <span>Paranavaí, Paraná — Brasil</span>
          </address>
        </div>
        <form className="contact-form" onSubmit={onSubmit} noValidate aria-label="Envie uma mensagem para a Lansutech" aria-busy={isSubmitting}>
          <div className="form-field">
            <label htmlFor="nome">Nome completo</label>
            <input id="nome" type="text" autoComplete="name" required maxLength={100} {...register('nome')} aria-invalid={Boolean(errors.nome)} aria-describedby={errors.nome ? 'nome-error' : undefined} disabled={isSubmitting} />
            {errors.nome && <p className="field-error" id="nome-error">{errors.nome.message}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="email">E-mail profissional</label>
            <input id="email" type="email" autoComplete="email" required {...register('email')} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} disabled={isSubmitting} />
            {errors.email && <p className="field-error" id="email-error">{errors.email.message}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="assunto">Assunto</label>
            <input id="assunto" type="text" required maxLength={200} {...register('assunto')} aria-invalid={Boolean(errors.assunto)} aria-describedby={errors.assunto ? 'assunto-error' : undefined} disabled={isSubmitting} />
            {errors.assunto && <p className="field-error" id="assunto-error">{errors.assunto.message}</p>}
          </div>
          <div className="form-field form-field--message">
            <label htmlFor="mensagem">Sua mensagem</label>
            <textarea id="mensagem" rows={3} required maxLength={1000} {...register('mensagem')} aria-invalid={Boolean(errors.mensagem)} aria-describedby={errors.mensagem ? 'mensagem-error' : undefined} disabled={isSubmitting} />
            {errors.mensagem && <p className="field-error" id="mensagem-error">{errors.mensagem.message}</p>}
          </div>
          <button type="submit" className="pill pill--gradient" disabled={isSubmitting}>
            {isSubmitting ? <>Enviando<LoaderCircle className="spinner" size={19} aria-hidden="true" /></> : <>Enviar mensagem<ArrowRight size={19} aria-hidden="true" /></>}
          </button>
          <div className={`form-status form-status--${submitStatus}`} role="status" aria-live="polite">
            {submitStatus === 'success' && 'Mensagem enviada! Entraremos em contato em breve.'}
            {submitStatus === 'error' && <>Não foi possível enviar. Tente novamente ou <a href="mailto:lansutech@gmail.com">fale por e-mail</a>.</>}
          </div>
        </form>
      </div>
      <ColorOrbits className="contact-orbits" />
    </section>
  );
}
