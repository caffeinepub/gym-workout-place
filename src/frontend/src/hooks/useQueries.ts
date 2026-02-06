import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, contact, message }: { name: string; contact: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactForm(name, contact, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}

export function useBusinessInfo(type: 'phone' | 'address' | 'hours') {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['businessInfo', type],
    queryFn: async () => {
      if (!actor) return '';
      switch (type) {
        case 'phone':
          return actor.getPhoneNumber();
        case 'address':
          return actor.getAddress();
        case 'hours':
          return actor.getOpeningHours();
        default:
          return '';
      }
    },
    enabled: !!actor && !isFetching,
  });
}
